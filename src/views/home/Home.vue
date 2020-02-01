<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="scroll-content"
      ref="scroll"
      :probe-type="3"
      @scrollPos="getScrollPos"
      :pullUpLoad="true"
      @pulledUp="loadMore"
    >
      <HomeSwiper :banners="banners"></HomeSwiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :items="['流行','新款','精选']"
        @tabClick="tabSwitch"
        ref="tabCtrl"
      ></tab-control>
      <goods-list :s_goods="showGoods"></goods-list>
    </scroll>

    <to-top @click.native="topClick" v-show="isShowTop"></to-top>

    <tab-control
        :items="['流行','新款','精选']"
        @tabClick="tabSwitch"
        ref="tabCtrl_2"
        class="tab-control tab-control-2"
        v-show="isTabCtrlTop"
      ></tab-control>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData, getHomeGoodsData } from "network/home";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import ToTop from "components/content/toTop/ToTop";
import { deBounce } from 'common/util'

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
      },
      currentIndex: 0,
      types: ["pop", "new", "sell"],
      isShowTop: false,
      isTabCtrlTop: false,
      tabCtrlOffsetTop: 0
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    ToTop
  },
  created() {
    this.getHomeMulData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMulData() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
      });
    },
    tabSwitch(index) {
      this.currentIndex = index;
      this.$refs.tabCtrl.curIndex = index
      this.$refs.tabCtrl_2.curIndex = index
    },
    topClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    getScrollPos(position) {
      this.isShowTop = position.y < -990
      this.isTabCtrlTop=position.y< -this.tabCtrlOffsetTop  //offsetTop是元素距离顶部的距离，固定值
    },
    loadMore() {
      this.getHomeGoods(this.types[this.currentIndex])
      this.$refs.scroll.finPullUp() //不写到getHomeGoods中可以避免初始化时多加载一次
    },

  },
  computed: {
    showGoods() {
      return this.goods[this.types[this.currentIndex]].list;
    }
  },
  mounted() {
    const deBuncedRefresh = deBounce(this.$refs.scroll.refreshScroll, 50)
    this.$bus.$on('imageLoaded', () => {
      deBuncedRefresh()
    })

  },
  beforeDestroy() {
    this.$bus.$off('imageLoaded', () => {
      console.log('移除imgloaded');
    })
  },
  updated() {
    this.tabCtrlOffsetTop = this.$refs.tabCtrl.$el.offsetTop
  }
};
</script>

<style>
#home {
  padding-top: 41px;

  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  /* position: sticky;
  top: 44px; */
  position: relative;
  z-index: 9;
  padding-bottom: 8px;
}
.tab-control-2 {
  padding-bottom: 2px;

}
.scroll-content {
  /* height: 200px; */
  position: absolute;
  top: 41px;
  bottom: 46px;
  left: 0;
  right: 0;

  overflow: hidden;
}
</style>