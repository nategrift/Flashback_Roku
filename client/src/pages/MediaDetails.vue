<template>
<div>
  <h1>Details</h1>
  <div v-if="media" class="details-page">
        <img
          :src="`${publicPath}media/posters/${media.media_cover}`"
          :alt="media.media_title"
        />
        <h2>{{ media.media_title }}</h2>
        <p>{{ media.media_desc }}</p>
        <p>Runtime: {{ media.media_runtime }}</p>
        <p>Released: {{ media.media_release }}</p>
        <p>Mature Content: {{ media.media_mature }}</p>
        <p>Likes: {{ media.likes }}</p>
        <p>Media Type: {{ media.type }}</p>
        <button v-if="hasLiked" @click="likeMovie('Delete')" >Unlike</button>
        <button v-else @click="likeMovie('POST')">Like</button>

        <router-link
          :to="{ name: 'watch', params: { mediaId: media.media_id } }"
          >Play</router-link
        >
        
  </div>
</div>
</template>

<script>
import fetchServer from "../util/requestsJwt";

export default {
  name: "MediaDetails",
  data() {
    return {
      media: null,
      publicPath: process.env.BASE_URL,
      hasLiked: false
    }
  },
  props: {
    mediaId: {
      required: true,
      type: String,
    },
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      try {
        const response = await fetchServer(
          `/api/media/${this.mediaId}`,
          "GET",
          this.$store.getters.token
        );
        this.media = response.media;
        this.hasLiked = response.hasLiked;

      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
        this.$router.push("/media");
      }
    },
    async likeMovie(method) {
      try {
        const response = await fetchServer(
          `/api/media/${this.mediaId}/like-media`,
          method,
          this.$store.getters.token
        );
        if (method == 'POST') {
          this.media.likes++;
        } else {
          this.media.likes--;
        }
        this.hasLiked = response.hasLiked;

      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
        this.$router.push("/media");
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.details-page {
  img {
    max-width: 200px;
  }
}
</style>