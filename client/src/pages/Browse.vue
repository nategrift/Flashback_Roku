<template>
  <div class="media" :class="{kidsTheme: isKid}">
    <!-- Title logo specific for current content section -->
    <img :src="publicPath + 'titles/' + types + '.png'" :alt="types" />
    <!-- Filter Button -->
    <select ref="range" @change="changeRange()">
      <option type="checkbox" name="range" value="all" selected>All</option>
      <option type="checkbox" name="range" value="1950">1950s</option>
      <option type="checkbox" name="range" value="1960">1960s</option>
      <option type="checkbox" name="range" value="1970">1970s</option>
      <option type="checkbox" name="range" value="1980">1980s</option>
      <option type="checkbox" name="range" value="1990">1990s</option>
    </select>
    <!-- List of media -->
    <ul class="mediaList">
      <li v-for="media in allMedia" :key="media.media_id">
        <img
          :src="`${publicPath}media/posters/${media.media_cover}`"
          :alt="media.media_title"
        />
        <div class="overlay">
          <p>{{ media.media_title }}</p>
          <p>{{ media.media_release }}</p>
          <p>{{ media.media_runtime }}</p>
          <!-- Links to watch or view details of specific item -->
          <router-link
            :to="{ name: 'watch', params: { mediaId: media.media_id } }"
            >Play</router-link
          >
          <router-link
            :to="{ name: 'MediaDetails', params: { mediaId: media.media_id } }"
            >Details</router-link
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";
export default {
  props: {
    types: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      allMedia: null,
      isKid: this.$store.getters.isKid
    };
  },
  mounted() {
    this.getMedia();
  },
  methods: {
    async getMedia(rangemin, rangemax) {

      let url = `/api/media?type=${this.types}`;
      //  If range exists then query with range params
      if (rangemin & rangemax) {
        url = `/api/media?type=${this.types}&rangemin=${rangemin}&rangemax=${rangemax}`;
      }

      try {
        const response = await fetchServer(
          url,
          "GET",
          this.$store.getters.token
        );
        this.allMedia = response.media;
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    },
    changeRange() {
      const range = this.$refs.range;

      // Find selected option
      const selectedElem = Array.from(range).find(elem => elem.selected);

      //  If it is all, then retreive all movies
      if (selectedElem.value == 'all') {
        this.getMedia();
      }

      // the "+" is Forcing element to be a number for addition later
      const min = +selectedElem.value;
      const max = min + 10;
      this.getMedia(min, max);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.media {
  overflow: hidden;
}
.mediaList {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 80vh;
  padding: 0;
  margin: 0;

  li {
    width: 160px;
    height: 233px;
    margin: 1rem;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    img {
      width: 100%;
      
    }
    .overlay {
      background-color: $color-darkest-overlay;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 102%;
      height: 102%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s;
      font-size: 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 2rem 0;

      p:first-of-type {
        font-weight: 900;
      }

      * {
        margin: 0;
      }
    }

    &:hover .overlay {
      opacity: 1;
    }
    
  }
}
  .kidsTheme {
    // Kids theme styles go here
  }
</style>