<template>
  <div class="Profiles">
    <logo-full></logo-full>
    <base-pinpad v-show="showPinpad" v-model="pin" v-on:closePinpad="closePinpad"></base-pinpad>
    <div>
      <button
        v-for="profile in profiles"
        :key="profile.id"
        @click="selectProfiles(profile.id, profile.levels)"
      >
        <img :src="publicPath + profile.icon" :alt="profile.name" />
        <p>{{ profile.name }}</p>
      </button>
    </div>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";
import BasePinpad from "../components/BasePinpad";
import LogoFull from "../components/LogoFull.vue";

export default {
  data() {
    return {
      profiles: null,
      publicPath: process.env.BASE_URL,
      pin: "",
      showPinpad: false,
      accountAttempt: null,
    };
  },
  components: {
    BasePinpad,
    LogoFull,
  },
  mounted() {
    this.getProfiles();
  },
  methods: {
    closePinpad() {
      this.showPinpad = false;
      this.pin = '';
    },
    async getProfiles() {
      try {
        const returnedProfiles = await fetchServer(
          "/api/user/profiles",
          "GET",
          this.$store.getters.token
        );
        this.profiles = returnedProfiles.profiles;
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    },
    async selectProfiles(profile_id, profile_level) {
      //  If its admin account, then show pinpad
      if (profile_level > 0 && !this.pin && this.pin.length !== 4) {
        this.showPinpad = true;
        this.accountAttempt = profile_id;
        return;
      }
      let pinObject;
      if (this.pin.length == 4) {
        pinObject = {
          pin: this.pin,
        };
        this.pin = "";
      }

      try {
        await this.$store.dispatch("selectProfile", {
          profile_id: profile_id,
          pin: pinObject,
          token: this.$store.getters.token,
        });
        this.$store.dispatch('clearError');
        this.$router.push("/media");
        this.showPinpad = false;
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    },
  },
  watch: {
    pin(pin) {
      if (pin.length >= 4) {
        this.selectProfiles(this.accountAttempt, 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.Profiles {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 10% 5%;

  button {
    background-color: transparent;
    outline: none;
    border: none;
    color: $color-text;
    font-size: 2.4rem;
    transition: background-color 0.2s;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    margin: 2rem;

    &:hover {
      background-color: $color-dark-overlay;
    }
  }
}
</style>