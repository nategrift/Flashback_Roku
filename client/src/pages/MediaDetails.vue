<template>
  <div>
    <h1>Details</h1>
    <router-link :to="{ name: 'Media' }">Back</router-link>
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
      <button v-if="hasLiked" @click="likeMovie('Delete')">Unlike</button>
      <button v-else @click="likeMovie('POST')">Like</button>
      <router-link :to="{ name: 'watch', params: { mediaId: media.media_id } }"
        >Play</router-link
      >
      <div class="social-list">
        <!-- Share on facebook -->
          <a
            class="share-button facebook-share"
            target="_blank"
            :href="`https://www.facebook.com/sharer/sharer.php?u=${hostName}${publicPath}media/details/${media.media_id}`">
            <img
            :src="`${publicPath}facebook-logo.svg`"
            alt="Share via Facebook"
            />
            Share</a
          >
        <!-- Twitter Share -->
        <a
          class="share-button twitter-share"
          target="_blank"
          :href="`https://twitter.com/intent/tweet?url=${hostName}${publicPath}media/details/${media.media_id}`"
        >
          <img
            :src="`${publicPath}twitter-logo.svg`"
            alt="Share via Twitter"
          />
          Tweet</a
        >
        <!-- LinkedIn Sharing -->
        <a
          class="share-button linkedin-share"
          target="_blank"
          :href="`https://www.linkedin.com/sharing/share-offsite/?url=${hostName}${publicPath}media/details/${media.media_id}`"
        >
          <img
            :src="`${publicPath}linkedin-logo.svg`"
            alt="Share via LinkedIn"
          />
          Share
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";
import config from "../config";

export default {
  name: "MediaDetails",
  data() {
    return {
      media: null,
      publicPath: process.env.BASE_URL,
      hasLiked: false,
      hostName: config.host,
    };
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
        if (method == "POST") {
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
  },
};
</script>

<style lang="scss" scoped>
.details-page {
  img {
    max-width: 200px;
  }
}

.share-button {
  color: white;
  border-radius: 2px;
  padding: 3px 6px 2px 6px;
  font-size: 12px;
  font-weight: 800;
  position: relative;
  padding-left: 24px;
  img {
    position: absolute;
    top: 50%;
    left: 7px;
    width: 12px;
    transform: translateY(-50%);
  }
}

.linkedin-share {
background-color: #2867b2;
}

.facebook-share {
  background-color: #4267B2;
}

.twitter-share {
  background-color: #1DA1F2;
}

.social-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 220px;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>