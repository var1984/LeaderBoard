<template>
  <div id="app">
       <h1>Cube <span>19</span> Leaderboard</h1>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Header />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
#app {
  width: 984px;
  height: 187px;
  margin: 0 auto;
  h1 {
    font-weight: bold;
    font-size: 34px;
    line-height: 32px;
    color: #1a1c1d;
    text-align: center;
    margin:  116px 0 53px;
    span {
      color: #ffe600;
    }
  }
}
</style>
