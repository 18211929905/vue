<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>Vue 2 基础项目已经可运行。</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue sss211111",
      requestUrl: "/api/simple",
    };
  },
  mounted() {
    this.fetchSimpleData();
  },
  methods: {
    async fetchSimpleData() {
      try {
        await axios.get(this.requestUrl);
      } catch (error) {
        console.error("请求 /api/simple 失败：", error);
      }
    },
  },
};
</script>

<style scoped>
#app {
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 12px;
}
</style>
