<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { GetLogAccount } from "./auth/authInstance";
import store from "./store";
export default defineComponent({
  mounted() {
    const user = GetLogAccount();
    if (user) {
      this.login(user);
    }

    setTimeout(() => {
      console.log(store.state.user, this.$store.state.user);
      console.log(process.env)
    }, 1);
  },
  methods: {
    ...mapMutations(["login"]),
  },
});
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
#section {
  background: $themeColor;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
