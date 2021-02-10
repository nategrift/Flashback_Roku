<template>
  <div>
    <base-pinpad v-if="showPinpad" v-model="pin"></base-pinpad>
    <button v-for="profile in profiles" :key="profile.id" @click="selectProfiles(profile.id, profile.levels)">
      <img :src="publicPath + profile.icon" :alt="profile.name" type=/>
      <p>{{ profile.name }}</p>
    </button>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";
import BasePinpad from '../components/BasePinpad';

export default {
  data() {
    return {
      profiles: null,
      publicPath: process.env.BASE_URL,
      pin: '',
      showPinpad: false,
      accountAttempt: null
    };
  },
  components: {
    BasePinpad
  },
  mounted() {this.getProfiles()},
  methods: {
    async getProfiles() {
      try {
        const returnedProfiles = await fetchServer('/api/user/profiles', 'GET', this.$store.getters.token);
        this.profiles = returnedProfiles.profiles;
        console.log(returnedProfiles.profiles)
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    },
    async selectProfiles(profile_id, profile_level) {
      
      if (profile_level > 0 && !this.pin && this.pin.length !== 4) {
        this.showPinpad = true;
        this.accountAttempt = profile_id;
        return;
      }
      let pinObject;
      if (this.pin.length == 4) {
        pinObject = {
          pin: this.pin
        }
        this.pin = '';
        this.accountAttempt = null;
      }

      try {
        const res = await fetchServer('/api/user/profiles/' + profile_id , 'POST', this.$store.getters.token, pinObject);

        const profile = {
          token: res.token,
          userId: res.userId,
          profile: res.profile
        }

        await this.$store.commit("setUser", profile);
        this.$router.push('/media')
        
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    }
  },
  watch: {
    pin(pin) {
      if (pin.length >=4) {
        this.selectProfiles(this.accountAttempt, 1);
        this.showPinpad = false;
      }
    }
  }
};
</script>