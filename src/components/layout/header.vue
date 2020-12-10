<template>
  <a-layout-header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/icon.png" width="50" alt="" />
        LOGO
      </router-link>
    </div>
    <a-menu theme="light" mode="horizontal">
      <a-menu-item key="0">
        <router-link to="/">Landing page</router-link>
      </a-menu-item>
      <a-menu-item key="1">
        <router-link to="/home/a1">Home page1</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/home/b1">Home page2</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/about">About</router-link>
      </a-menu-item>
      <!-- <a-menu-item key="4"> NAV4 </a-menu-item> -->
    </a-menu>
    <span>
      {{ d.VUE_APP_APP_ID }}
      {{ userInfo.name }}
    </span>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SiteHeader",
  components: {},
  props: {},
  data() {
    return {
      d: {},
      userInfo: {
        name: "testuser",
      },
    };
  },
  mounted() {
    this.d = process.env;
    console.log(process.env);
  },
});
</script>

<style lang="scss" scoped>
.ant-layout-header {
  background-color: #fff;
  font-size: 16px;
  color: #333;
  text-align: left;
  line-height: 56px;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: inline-block;
  }
  .ant-menu {
    display: inline-block;
    margin: 0 0 0 50px;
    line-height: 56px;
  }
  a:hover {
    text-decoration: none;
  }
}
</style>
