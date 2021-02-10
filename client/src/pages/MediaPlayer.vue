// src="../assets/media/content/movies/hercules.mp4"
<template>
  <div
    class="video-player"
    ref="fullPlayer"
    @keyup="keypress"
    @mousemove="setTimer"
  >
    <video
      @click.self="togglePlaying"
      :src="url"
      type="video/mp4"
      ref="videoPlayer"
      @timeupdate="setSlider"
    ></video>
    <div class="controls" v-if="controlsShown">
      <input
        type="range"
        min="0"
        max="1000"
        value="0"
        class="slider"
        ref="timeSlider"
        @input="() => changeTime()"
      />
      <div class="controls-bottom">
        <div class="controls-bottom__left">
          <button
            @click="togglePlaying"
            ref="button"
            title="Toggle Playing Video (Space)"
          >
            Play
          </button>
          <button
            @click="() => changeTime(-10)"
            title="Go backwards 10 seconds (Left Arrow)"
          >
            -10s
          </button>
          <button
            @click="() => changeTime(10)"
            title="Fast farward 10 seconds (Right Arrow)"
          >
            +10s
          </button>
          <button @click="toggleVolume">Volume</button>
          <div class="volumeControl">
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
          <!-- <p>Hercules</p> -->
        </div>
        <div class="controls-bottom__right">
          <button>?</button>
          <button>Speed</button>
          <button @click="fullScreen">FullScreen</button>
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
      url: "",
      publicPath: process.env.BASE_URL,
      timer: null,
    };
  },
  props: {
    mediaId: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    setTimer() {
      this.controlsShown = true;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.controlsShown = false;
      }, 3000);
    },
    async fetchMovie() {
      try {
        const response = await fetchServer(
          `/api/media/${this.mediaId}`,
          "GET",
          this.$store.getters.token
        );

        this.url = `${this.publicPath}media/content/${response.media.type}/${response.media.media_src}`;
        this.$refs.videoPlayer.load();
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
        this.$router.push("/media");
      }
    },
    toggleControlsShown() {
      this.controlsShown = false;
    },
    togglePlaying() {
      const video = this.$refs.videoPlayer;
      const button = this.$refs.button;
      if (video.paused || video.ended) {
        video.volume = 0.5;
        video.play();
        button.textContent = "Pause";
      } else {
        video.pause();
        button.textContent = "Play";
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
      const vol = this.$refs.volumeSlider;
      if (vol.parentElement.style.visibility == "hidden") {
        vol.parentElement.style.visibility = "visible";
      } else {
        vol.parentElement.style.visibility = "hidden";
      }
    },
    setVolume() {
      const video = this.$refs.videoPlayer;
      const vol = this.$refs.volumeSlider;
      video.volume = vol.value / 100;
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  font-size: 16px;
}

.controls p {
  display: inline;
  margin: 0;
  padding: 4px 12px;
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
  margin-left: auto;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  background: grey;
  width: 95%;
  border-radius: 5px;
  position: fixed;
  left: 2.5%;
  bottom: 80px;
  border: 0;
  height: 5px;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  color: #13bba4;
  margin-top: -1px;
}

/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: #43e5f7;
  height: 100%;
}
input[type="range"]::-moz-range-track {
  background-color: grey;
  height: 100%;
}
/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color: #43e5f7;
}
input[type="range"]::-ms-fill-upper {
  background-color: grey;
}

.volumeControl {
  display: block;
  position: relative;
  visibility: hidden;
}

.volumeControl > input {
  display: block;
  position: absolute;
  width: 100px;
  top: -150px;
  left: 200px;
  transform: rotateZ(-90deg);
}
</style>
