/*
 * @Author: Zhanganqi2017 
 * @Date: 2019-04-23 12:16:56 
 * @Last Modified by: Zhanganqi2017
 * @Last Modified time: 2019-05-06 19:16:06
 */
<template>
    <div>
        <home-header></home-header>
        {{this.$store.state.header}}
        {{this.$store.state.header}}
    </div>
</template>

<script>
/* eslint-disable */
import HomeHeader from "./component/header";
export default {
  name: "home",
  components: {
    HomeHeader
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
</style>