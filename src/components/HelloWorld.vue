<template>
  <div class="hello">
   
    <a-button type="primary" @click="handleMessage">点击</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const appConfig: any = inject("AppConfig");
    const ctx: any = getCurrentInstance();

    function handleMessage() {
      appConfig.$message.info("你正常吗");
    }

    return {
      handleMessage,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
