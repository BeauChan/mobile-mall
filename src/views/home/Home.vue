<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <h2>主页</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData } from "network/home";
import HomeSwiper from './childComps/HomeSwiper'

export default {
  data() {
    return {
      banners:[],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>