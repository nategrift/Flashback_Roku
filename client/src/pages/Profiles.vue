<template>
  <div>
    <button v-for="profile in profiles" :key="profile.id" @click="selectProfiles(profile.id, profile.levels)">
      <img :src="publicPath + profile.icon" :alt="profile.name" type=/>
      <p>{{ profile.name }}</p>
    </button>
  </div>
</template>

<script>
import fetchServer from "../util/requestsJwt";
export default {
  data() {
    return {
      profiles: null,
      publicPath: process.env.BASE_URL
    };
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
      
      if (profile_level > 0) {
        pin = await pinpad();
      }
      try {
        const returnedProfiles = await fetchServer('/api/user/profiles/' + profile_id , 'POST', this.$store.getters.token);
        console.log(returnedProfiles)
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    }
  },
};
</script>