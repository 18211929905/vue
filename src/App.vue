<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>Vue 2 基础项目已经可运行。</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue sss2",
    };
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
