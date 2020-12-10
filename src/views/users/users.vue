<template>
  <div class="container-fluid">
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item, index }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <router-link :to="`/home/users/${index}`"
                >{{ item.title }} {{ index }}</router-link
              >
              <!-- <a href="/">{{ item.title }} {{ index }}</a> -->
            </template>
            <template #avatar>
              <a-avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
