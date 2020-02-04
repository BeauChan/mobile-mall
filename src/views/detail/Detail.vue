<template>
  <div id="detail">
    <detail-nav @navTabClick="navTabClick" ref="nav"></detail-nav>
    <scroll class="scroll-content" ref="scroll" @scrollPos="getScrollPos" :probe-type="3">
      <detail-swiper :topImages="topImg"></detail-swiper>
      <base-info :goods="goods"></base-info>
      <shop-info :shop="shop"></shop-info>
      <goods-info :goods-detail="goodsDetail" @imgLoaded="goodsImgsLoaded"></goods-info>
      <params-info :goods-params="goodsParams" ref="paramsInfo"></params-info>
      <comment-info :goods-comments="goodsComments" ref="commentInfo"></comment-info>
      <goods-list :goods-list="goodsRecommend" :page-id="1" ref="recommend"></goods-list>
    </scroll>
    <bottom-bar></bottom-bar>
    <to-top @click.native="topClick" v-show="isShowTop"></to-top>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'
import { getDetailData, Goods, Shop, GoodsParams, getRecommend } from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper'
import BaseInfo from './childComps/BaseInfo'
import Scroll from "components/common/scroll/Scroll";
import ShopInfo from './childComps/ShopInfo'
import GoodsInfo from './childComps/GoodsInfo'
import { deBounce } from 'common/util'
import ParamsInfo from './childComps/ParamsInfo'
import CommentInfo from './childComps/CommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import BottomBar from './childComps/BottomBar'
import {backToTop} from 'common/mixin'

export default {
  name: 'Detail',
  data() {
    return {
      id: null,
      topImg: [],
      goods: {},  //此处不能null
      shop: {},
      goodsDetail: {},
      goodsParams: {},
      goodsComments: {},
      goodsRecommend: [],
      compsPosition: [],
      navTabIndex: 0
    }
  },
  mixins:[backToTop],
  created() {
    this.id = this.$route.params.iid,
      getDetailData(this.id).then(res => {
        const result = res.result
        this.topImg = result.itemInfo.topImages
        // console.log(res);

        this.goods = new Goods(result.columns, result.itemInfo, result.shopInfo)

        this.shop = new Shop(result.shopInfo)

        this.goodsDetail = result.detailInfo

        this.goodsParams = new GoodsParams(result.itemParams)

        this.goodsComments = result.rate.cRate !== 0 ? result.rate.list[0] : {}
      }),
      getRecommend().then(res => {
        console.log(res.data.list)
        this.goodsRecommend = res.data.list
      }),
      this.deBounceImgLoad = deBounce(() => {
        this.$refs.scroll.refreshScroll()
        this.compsPosition = []
        this.compsPosition.push(0)
        this.compsPosition.push(this.$refs.paramsInfo.$el.offsetTop)
        this.compsPosition.push(this.$refs.commentInfo.$el.offsetTop)
        this.compsPosition.push(this.$refs.recommend.$el.offsetTop)
      }, 0)
  },
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo,
    Scroll,
    ShopInfo,
    GoodsInfo,
    ParamsInfo,
    CommentInfo,
    GoodsList,
    BottomBar
  },
  methods: {
    goodsImgsLoaded() {
      this.deBounceImgLoad()
    },
    navTabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.compsPosition[index], 250)
    },
    deBounceImgLoad() { },
    getScrollPos(position) {
      // console.log(position.y);
      const y = position.y
      
      if(y>-this.compsPosition[1])
        this.navTabIndex = 0
      else if( y<=-this.compsPosition[1]&&y>-this.compsPosition[2])
        this.navTabIndex = 1
      else if(y<=-this.compsPosition[2]&&y>-this.compsPosition[3])
        this.navTabIndex = 2
      else if(y<=-this.compsPosition[3])
        this.navTabIndex = 3

      this.$refs.nav.currentIndex = this.navTabIndex

      this.isShowTop = position.y < -990
    }
  }
}
</script>

<style>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.scroll-content {
  /* height: 200px; */
  position: absolute;
  top: 41px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* 溢出滚动区域的部分隐藏，这样就不会挡到navbar了，但会引发bfc */
  overflow: hidden;
}
</style>