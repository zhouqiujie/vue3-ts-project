<template>
  <h3>已登录</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
export default defineComponent({
  data() {
    return {};
  },
  mounted() {
    alert("您已登录");
    // this.login()
    this.$router.replace("/");
  },
  methods: {
    ...mapMutations(["login", "logout"]),
  },
});
</script>
