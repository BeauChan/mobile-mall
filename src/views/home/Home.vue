<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :items="['流行','新款','精选']"></tab-control>
    <goods-list :s_goods="goods['pop'].list"></goods-list>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
    <h2>主页</h2>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData,getHomeGoodsData } from "network/home";
import TabControl from "components/content/TabControl";
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  created() {
    this.getHomeMulData();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomeMulData() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      let page = this.goods[type].page+1
      getHomeGoodsData(type,page).then(res=>{
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
      })
    }
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
#home {
  padding-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>