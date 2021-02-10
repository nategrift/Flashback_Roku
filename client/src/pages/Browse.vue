<template>
  <div class="media">
    <img :src="publicPath + 'titles/' + types + '.png'" :alt="types" />
    <ul class="mediaList">
      <li v-for="media in allMedia" :key="media.media_id">
        <img
          :src="`${publicPath}media/posters/${media.media_cover}`"
          :alt="media.media_title"
        />
        <p>{{ media.media_title }}</p>
        <p>{{ media.media_release }}</p>
        <p>{{ media.media_runtime }}</p>
        <router-link
          :to="{ name: 'watch', params: { mediaId: media.media_id } }"
          >Play</router-link
        >
        <button>More Info</button>
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
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      try {
        const response = await fetchServer(
          `/api/media?type=${this.types}`,
          "GET",
          this.$store.getters.token
        );
        this.allMedia = response.media;
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    },
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

  li {
    min-width: 140px;
    max-width: 200px;
    width: 20%;
    margin: 1rem;

    img {
      width: 100%;
    }
  }
}
</style>