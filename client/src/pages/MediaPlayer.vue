
<template>
<!-- Full Video Player -->
  <div
    class="video-player"
    ref="fullPlayer"
    @keyup="keypress"
    @mousemove="setTimer"
  >
  <!-- Transcript Modal -->
  <div v-show="transcriptShow" class="transcript">
    <img @click="toggleTranscript" :src="`${publicPath}times-circle-duotone.svg`" alt="Back" />
    <h2>{{ mediaName }} Transcript:</h2>
    <pre>{{ transcript }}</pre>
  </div>
  <!-- Tooltip Modal -->
  <div v-show="tooltip" class="tooltip" ref="tooltip">
    <p>{{ tooltip }}</p>
  </div>
  <!-- PLAY BUTTON -->
  <div class="playButton" @click="togglePlaying" :class="{showPlayButton: !mediaPlaying}" v-show="!smallScreen">
    <img :src="`${publicPath}play-circle-duotone.svg`" alt="Play" />
  </div>
    <video
      :controls="smallScreen"
      @click.self="togglePlaying"
      :src="url"
      type="video/mp4"
      ref="videoPlayer"
      @timeupdate="setSlider"
      v-playback-rate="speed"
      v-if="!mediaIsAudio"
    >
    <track v-if="captionsSrc" :src="`${publicPath}captions/${captionsSrc}`" label="English" kind="captions" srclang="en-us" default >
    </video>

    <audio
      :controls="smallScreen"
      @click.self="togglePlaying"
      :src="url"
      ref="videoPlayer"
      @timeupdate="setSlider"
      v-playback-rate="speed"
      v-else
      class="audioControls"
    ></audio>

    <!-- If audio show poster -->
    <div v-if="mediaIsAudio" class="audio-display" :class="{audioPlaying: mediaPlaying}" @click="togglePlaying">
      <img :src="posterURL" :alt="mediaName">
    </div>

    <!-- Controls -->
    <div class="controls">
      <!-- Back Button  -->
      <div class="controls-top__left">
        <button @click="backPage">
          <img :src="`${publicPath}arrow-left-solid.svg`" alt="Back" />
        </button>
      </div>

      <!-- Main Time Stamp Slider -->
      <input
        type="range"
        min="0"
        max="1000"
        value="0"
        class="slider main-slider"
        ref="timeSlider"
        @input="changeTime(null)"
        v-show="controlsShown && !smallScreen"
      />
      <!-- Bottom controls for smaller button -->
      <div class="controls-bottom" v-show="controlsShown && !smallScreen">
        <!--  Left side controls for button -->
        <div class="controls-bottom__left">
          <!-- Play button -->
          <button
            @click="togglePlaying"
            title="Toggle Playing Video (Space)"
          >
            <img class="img-button" ref="playPause" :src="`${publicPath}play-solid.svg`" alt="Play/Pause">
          </button>
           <!-- Back 10 seconds -->
          <button
            @click="changeTime(-10)"
            title="Go backwards 10 seconds (Left Arrow)"
          >
            -10s
          </button>
          <!-- Farward 10 seconds -->
          <button
            @click="changeTime(10)"
            title="Fast farward 10 seconds (Right Arrow)"
          >
            +10s
          </button>
          <!-- Volume Button and Input -->
          <button @click="toggleVolume">
            <img class="img-button" :src="`${publicPath}volume-solid.svg`" alt="Volume">
          </button>
          <div class="volumeControl" v-show="volumeShown">
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              class="slider"
              ref="volumeSlider"
              @input="setVolume"
              @change="setVolume"
            />
          </div>
          <p>{{ mediaName }}</p>
        </div>
        <!-- Right side controls on bottom -->
        <div class="controls-bottom__right">
          <!-- Speed Settings and Button -->
          <div v-show="speedShown" class="speed-options">
            <!-- Loop through each available speed in the data section -->
            <button v-for="speed in availableSpeeds" :key="speed" @click="setSpeed(speed)" :class="{active: isCurrentSpeed(speed)}">{{speed}}x</button>
          </div>
          <button @click="toggleSpeed">
            <img class="img-button" :src="`${publicPath}speed-solid.svg`" alt="Speed">
          </button>
          <!-- Captions Button -->
          <button @click="toggleCaptions" v-if="captionsSrc">
            <img ref="captions" class="img-button" :src="`${publicPath}closed-captioning-solid.svg`" alt="Captions">
          </button>
          <!-- Transcript Button -->
          <button @click="toggleTranscript" v-if="transcript">
            <img class="img-button" :src="`${publicPath}file-alt-solid.svg`" alt="Transcript">
          </button>
          <!-- Fullscreen Button -->
          <button @click="fullScreen">
            <img class="img-button" :src="`${publicPath}fullscreen-solid.svg`" alt="Fullscreen">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";

export default {
  name: "mediaPlayer",
  data: function () {
    return {
      controlsShown: true, 
      volumeShown: false,
      speedShown: false,
      speed: 1,
      availableSpeeds: [0.5, 1, 1.5, 2],
      url: "",
      posterURL: '',
      mediaName: '',
      mediaIsAudio: false,
      publicPath: process.env.BASE_URL,
      timer: null,
      mediaPlaying: false,
      windowWidth: window.innerWidth,
      smallScreen: false,
      captionsSrc: false,
      transcript: false,
      transcriptShow: false,
      tooltip: null
    };
  },
  watch: {
    windowWidth(_, newwidth) {
      this.smallScreen = newwidth <= 800 ? true : false
    }
  },
  props: {
    mediaId: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.fetchMovie();
    window.addEventListener('resize', this.onResize)

    // Set original screen size state
    this.smallScreen = window.innerWidth <= 800 ? true : false
  },
  beforeUnmount() {
    // Clear timers and window mounts
    window.removeEventListener('resize', this.onResize); 
    clearTimeout(this.timer);
  },
  directives: {
    playbackRate(el, binding) {
      el.playbackRate = binding.value;
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    backPage() {
      this.$router.back();
    },
    setTimer() {
      this.controlsShown = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.controlsShown = false;
      }, 3000);
    },
    async fetchMovie() {
      //  Get movie from database using the id in url
      try {
        const response = await fetchServer(
          `/api/media/${this.mediaId}`,
          "GET",
          this.$store.getters.token
        );

        this.url = `${this.publicPath}media/content/${response.media.type}/${response.media.media_src}`;
        this.mediaName = response.media.media_title;
        this.mediaIsAudio = response.media.type == 'audio';
        this.posterURL = `${this.publicPath}media/posters/${response.media.media_cover}`;
        if (response.media.media_transcript) {
          this.transcript = response.media.media_transcript;
        }
        if (response.media.media_captions) {
          this.captionsSrc = response.media.media_captions;
        }


        this.$refs.videoPlayer.load();
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
        this.$router.push("/media");
      }
    },
    togglePlaying() {
      const video = this.$refs.videoPlayer;
      const img = this.$refs.playPause;
      const vol = this.$refs.volumeSlider;
      
      if (video.paused || video.ended) {
        video.volume = 0.5;
        video.play();
        video.volume = vol.value / 100;
        img.src =`${this.publicPath}pause-solid.svg`;
        this.mediaPlaying = true;
      } else {
        video.pause();
        img.src =`${this.publicPath}play-solid.svg`;
        this.mediaPlaying = false;
      }
    },
    changeTime(time) {
      const video = this.$refs.videoPlayer;
      const slider = this.$refs.timeSlider;
      if (time) {
        video.currentTime += time;
      } else {
        video.currentTime = (slider.value / 1000) * video.duration;
      }
    },
    setSlider() {
      const video = this.$refs.videoPlayer;
      const slider = this.$refs.timeSlider;
      slider.value = (video.currentTime / video.duration) * 1000;
    },
    fullScreen() {
      const videoPlayer = this.$refs.fullPlayer;

      if (!window.fullScreen) {
        if (videoPlayer.requestFullscreen) {
          videoPlayer.requestFullscreen();
        } else if (videoPlayer.webkitRequestFullscreen) {
          videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) {
          videoPlayer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    toggleVolume() {
      this.volumeShown = !this.volumeShown;
    },
    setVolume() {
      const video = this.$refs.videoPlayer;
      const vol = this.$refs.volumeSlider;
      video.volume = vol.value / 100;
    },
    toggleSpeed() {
      this.speedShown = !this.speedShown;
    },
    isCurrentSpeed(speed) {
      return this.speed == speed;
    },
    setSpeed(speed) {
      const video = this.$refs.videoPlayer;
      if (video) {
        this.speed = speed;
      }
    },
    keypress(e) {
      switch (e.keyCode) {
        case 32:
          this.togglePlaying();
          break;
        case 37:
          this.changeTime(-10);
          break;
        case 39:
          this.changeTime(10);
          break;
        case 38:
          this.$refs.volumeSlider.value =
            parseInt(this.$refs.volumeSlider.value) + 10;
          break;
        case 40:
          this.$refs.volumeSlider.value =
            parseInt(this.$refs.volumeSlider.value) - 10;
          break;
        default:
          break;
      }
    },
    toggleCaptions() {
      const video = this.$refs.videoPlayer;
      const captions = this.$refs.captions;

      if (video.textTracks[0].mode == "hidden") {
        video.textTracks[0].mode = "showing";
        captions.src = `${this.publicPath}closed-captioning-solid.svg`;
      } else {
        video.textTracks[0].mode = "hidden";
        captions.src = `${this.publicPath}closed-captioning-light.svg`;
      }

    },
    toggleTranscript() {
      this.transcriptShow = !this.transcriptShow
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/_variables.scss";

$player-accent: #43e5f7;

.video-player {
  position: fixed;
  width: 100%;
  height: 100vh;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 210;
}

.video-player video {
  width: 100%;
  max-height: 100%;
}

.controls {
  position: fixed;
  width: 100%;
  font-size: 16px;
}
.controls button {
  position: relative;
  outline: none;
  border: none;
  padding: 4px 12px;
  margin-right: 10px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.controls p {
  display: inline;
  margin: 0;
  padding: 4px 12px;
  font-size: 16px;
  font-weight: bold;
}

.controls-bottom {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  bottom: 40px;
  padding: 0 40px;
  box-sizing: border-box;
}

.controls-bottom__right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1rem;
  margin-left: auto;
}
.controls-bottom__left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
}

.controls-top__left {
  position: fixed;
  top: 4rem;
  left: 3rem;
  img {
    width: 5rem;
    height: 5rem;
    padding: 0.5rem;
  }
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  background: grey;
  border-radius: 5px;
  border: 0;
  height: 5px;
}

.main-slider {
  width: 95%;
  position: fixed;
  left: 2.5%;
  bottom: 10.5rem;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  color: $player-accent;
  margin-top: -1px;
}

/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: $player-accent;
  height: 100%;
}
input[type="range"]::-moz-range-track {
  background-color: grey;
  height: 100%;
}
/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color: $player-accent;
}
input[type="range"]::-ms-fill-upper {
  background-color: grey;
}

.volumeControl {
  display: block;
  position: relative;
}

.volumeControl > input {
  display: inline-block;
  position: relative;
  width: 100px;
}
.img-button {
  width: 3.5rem;
  height: 3.5rem;
}

.speed-options {
  display: flex;
  justify-content: space-around;
  transition: color 0.3s;
  cursor: pointer;

  button:hover {
    color: rgb(181, 181, 181);
  }
}

.active {
  color: $player-accent !important;
}

.audio-display {
  position: absolute;
  background: $gradient-background;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    box-shadow: 1rem 1rem 2rem $color-dark-overlay;
  }
}

@keyframes shake {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(.99);
  }
  45% {
    transform: scale(1.01);
  }
  50% {
    transform: scale(.98);
  }
  100% {
    transform: scale(1);
  }
}

.audioPlaying {
  img {
    animation: shake 4s ease 0s infinite normal none;
  }
}

.playButton {
  z-index: 500;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15rem;
  height: 15rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.showPlayButton {
  opacity: 1;
  pointer-events: all;
}

.audioControls {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000
}

.transcript {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background-color: white;
  color: black;
  height: 100vh;
  overflow-y: auto;
  font-size: 20px;
  width: 100%;

  img {
    width: 4rem;
    margin: 2rem 0;
  }

  p {
    max-width: 60%;
    line-height: 30px;
    font-size: 20px;
    margin: 0 auto;
  }
}


</style>
