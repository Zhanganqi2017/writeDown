<template>
    <div class="homeHeader">
        {{this.$store.state.header}}Header
    </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  },
  created() {
    console.log("created");
  }
};
</script>

<style>
.homeHeader {
  height: 50px;
  line-height: 50px;
  background: rgba(0, 0, 0, 0.1);
}
</style>