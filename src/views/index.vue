<template>
  <a-layout>
    <site-header></site-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
    <site-footer></site-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SiteFooter, SiteHeader } from "@/components";
export default defineComponent({
  components: { SiteFooter, SiteHeader },
});
</script>

<style lang="scss" scoped>
.ant-layout {
  background-color: transparent;
}
.ant-layout-content {
  min-height: calc(100vh - 58px - 70px);
  margin: 58px 0 0 0;
}
</style>
