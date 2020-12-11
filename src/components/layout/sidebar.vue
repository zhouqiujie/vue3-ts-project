<template>
  <a-layout-sider theme="light">
    <div class="text-right">
      <a-button type="link" @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </a-button>
    </div>

    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <PieChartOutlined />
        <span>
          <router-link to="/home/users">Users</router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="2">
        <DesktopOutlined />
        <span>
          <router-link to="/home/c1">Module C</router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="3">
        <InboxOutlined />
        <span>
          <router-link to="/home/d1">Module D</router-link>
        </span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span><MailOutlined /><span>Navigation One</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  data() {
    return {
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(val, oldVal) {
      this.preOpenKeys = oldVal;
    },
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    },
  },
});
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  border-right: 1px solid #eee;
  background-color: #ffffff;
  height: calc(100vh - 60px);
  overflow-y: auto;

  position: fixed;
  top: 60px;
  left: 0;

  .ant-menu {
    background-color: transparent;
    text-align: left;
  }
  .ant-menu-submenu > .ant-menu {
    background-color: transparent !important;
  }
}
</style>
