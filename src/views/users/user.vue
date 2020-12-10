<template>
  <a-button type="primary" @click="goBack()">Go back >></a-button>
  <div>detail</div>
  <p>{{ $route.params.id }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    goBack() {
      this.$router.back();
    },
  },
});
</script>
