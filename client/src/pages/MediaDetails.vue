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
      <div class="comments">
        <div class="comment-header">
          <h2>Comments:</h2>
          <base-sub-button :click="addCommentHandler"
          >{{commentButtonText}}</base-sub-button>
        </div>
        <div class="comment-add" v-if="commentAddBoxShown">
          <base-textarea label="Add Comment" v-model="commentCopy"></base-textarea>
          <base-sub-button :click="addComment"
          >Post</base-sub-button>
        </div>
        <div v-if="noComments">
          <div class="comment" v-for="comment in media.comments" :key="comment.comment_id">
           <p>{{ comment.comment_username }}</p>
           <p>{{ comment.comment_copy }}</p>
          </div>
        </div>
        <div v-else>
          <div>
            <h2>No comments for this media yet</h2>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";
import config from "../config";
import BaseSubButton from "../components/BaseSubButton";
import BaseTextarea from "../components/BaseTextarea";


export default {
  name: "MediaDetails",
  components: {
    BaseSubButton,
    BaseTextarea
  },
  data() {
    return {
      media: null,
      publicPath: process.env.BASE_URL,
      hasLiked: false,
      hostName: config.host,
      commentAddBoxShown: false,
      commentCopy: ''
    };
  },
  props: {
    mediaId: {
      required: true,
      type: String,
    },
  },
  computed: {
    commentButtonText() {
      return this.commentAddBoxShown ? 'Hide' : 'Add Comment'
    },
    noComments() {
      return this.media.comments.length > 0
    }
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
    addCommentHandler() {
      this.commentAddBoxShown = !this.commentAddBoxShown
    },
    async addComment() {
      try {
        const response = await fetchServer(
          `/api/media/${this.mediaId}/comment`,
          "POST",
          this.$store.getters.token,
          {copy: this.commentCopy}
        );

        // Set new comments to the video
        this.media.comments = response.comments
        this.commentAddBoxShown = false;
        this.commentCopy = '';

      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
        this.commentAddBoxShown = false;
      }
    }
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

.comments {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6rem auto;
    width: 60%;
    min-width: 300px;

  & > div:last-of-type {
    width: 100%;
  }
  .comment-header {
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h2 {
        font-size: 2.4rem;
    }
  }
  .comment {
    background-color: $color-dark-overlay;
    padding: 2rem 4rem;
    margin: 1rem 0;
    text-align: left;
    width: 100%;

    p {
      margin: 0.5rem;
    }

    p:first-of-type {
      font-weight: 900;
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }
  }

  .comment-add {
    width: 100%;
    margin: 1rem 0 2rem 0;
    button {
      width: 100%;
      background-color: $color-accent;
    }
}

}

</style>