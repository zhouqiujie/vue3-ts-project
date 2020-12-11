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
    <div class="ml-auto">
      <a-button type="link" @click="login()" v-if="!isLogin">登录</a-button>
      <span v-if="isLogin">
        <UserOutlined />

        <small class="ml-1">
          {{ userInfo.userName }}
        </small>
      </span>

      <a-button type="link" v-if="isLogin" @click="logout()">退出</a-button>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  MSALObjLogin,
  GetLogAccount,
  MSALObjLogout
} from "@/auth/authInstance";
import { UserOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "SiteHeader",
  components: { UserOutlined },
  props: {},
  data() {
    return {
      isLogin: false,
      userInfo: {
        userName: ""
      }
    };
  },
  mounted() {
    const user = GetLogAccount();
    if (user.userName) {
      this.isLogin = true;
    }
    this.userInfo = user;
  },
  methods: {
    login() {
      MSALObjLogin();
    },
    logout() {
      MSALObjLogout();
    }
  }
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
  display: flex;
  .ant-menu {
    margin: 0 0 0 50px;
    line-height: 56px;
  }
  a:hover {
    text-decoration: none;
  }
}
</style>
