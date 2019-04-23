<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html * {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  position: relative;
}
#app {
  background: rgba(0, 0, 0, 0.7);
  color: rgb(255, 255, 255);
  height: 100%;
}
</style>
