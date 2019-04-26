<template>
    <div class="homeHeader">
        {{this.$store.state.header}}Header
        <p>wrotedown</p>
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
    this.$store.state.header = "inComponent";
    // this.$store.dispatch("change", "bydispatch");
    // this.$store.commit("changVal", "bycommitHEADER");
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