<template>
  <div>
    <h1>Details</h1>
    <base-sub-button class="top-right" :click="routerBack"
      >Back</base-sub-button
    >
    <div v-if="media" class="details-page">
      <img
        :src="`${publicPath}media/posters/${media.media_cover}`"
        :alt="media.media_title"
      />
      <div class="details">
        <h2>{{ media.media_title }}</h2>
        <p class="desc">{{ media.media_desc }}</p>
        <p class="info">Runtime: <strong>{{ media.media_runtime }}</strong></p>
        <p class="info">Released: <strong>{{ media.media_release }}</strong></p>
        <p class="info">Mature Content: <strong>{{ media.media_mature }}</strong></p>
        <p class="info">Likes: <strong>{{ media.likes }}</strong></p>
        <p class="info">Media Type: <strong>{{ media.type }}</strong></p>
        <div class="actions">
          <base-sub-button  v-if="hasLiked" @click="likeMovie('DELETE')">Unlike</base-sub-button>
          <base-sub-button v-else @click="likeMovie('POST')">Like</base-sub-button>
          <router-link
            :to="{ name: 'watch', params: { mediaId: media.media_id } }"
            ><base-sub-button>Play</base-sub-button></router-link
          >
        </div>
      </div>
      <div class="social-list">
        <!-- Share on facebook -->
        <a
          class="share-button facebook-share"
          target="_blank"
          :href="`https://www.facebook.com/sharer/sharer.php?u=${hostName}${publicPath}media/details/${media.media_id}`"
        >
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
          <img :src="`${publicPath}twitter-logo.svg`" alt="Share via Twitter" />
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
import BaseSubButton from "../components/BaseSubButton";

export default {
  name: "MediaDetails",
  components: {
    BaseSubButton,
  },
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
    routerBack() {
      this.$router.back();
    },
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
@import "../assets/scss/_variables.scss";

.top-right {
  position: absolute;
  top: 9rem;
  left: 4rem;
}

.details {
  .actions * {
    margin: 0.5rem;
  }
  p {
    font-size: 1.4rem;
  }
  .info {
    background: $color-darkest-nav;
    padding: 1rem;
    margin: 1rem;
    display: inline-block;
  }
  .desc {
    font-size: 1.6rem;
    padding: 0 4rem;
  }
  h2 {
    font-size: 2.8rem;
  }
}

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
  background-color: #4267b2;
}

.twitter-share {
  background-color: #1da1f2;
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