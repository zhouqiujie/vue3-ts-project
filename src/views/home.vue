<template>
  <a-layout class="layout1">
    <site-header></site-header>
    <a-layout class="layout2">
      <side-bar></side-bar>
      <a-layout-content>
       <router-view />
      </a-layout-content>
    </a-layout>
    <!-- <site-footer></site-footer> -->
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HelloWorld, SiteHeader, SideBar, SiteFooter } from "@/components"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    SiteHeader,
    // SiteFooter,
    SideBar,
  },
});
</script>

<style lang="scss">
.layout1 {
  min-height: 100vh !important;
  background-color: #fff !important;
}
.layout2 {
  min-height: calc(100vh - 56px);
  background-color: #fff !important;
  .ant-layout-content {
    margin: 60px 0 0 200px;
  }
}
</style>
