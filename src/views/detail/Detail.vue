<template>
  <div>
    <detail-nav></detail-nav>
    <detail-swiper :topImages="topImg"></detail-swiper>
    <base-info :goods="goods"></base-info>
  </div>
</template>

<script>
import DetailNav from './childComps/DetailNav'
import {getDetailData,Goods} from 'network/detail'
import DetailSwiper from './childComps/DetailSwiper'
import BaseInfo from './childComps/BaseInfo'
export default {
  name: 'Detail',
  data(){
    return {
      id: null,
      topImg: [],
      goods:{}  //此处不能null
    }
  },
  created(){
    this.id = this.$route.params.iid,
    getDetailData(this.id).then(res=>{
      const result = res.result
      this.topImg=result.itemInfo.topImages
      console.log(res);
      
      this.goods = new Goods(result.columns,result.itemInfo,result.shopInfo)

    })
  },
  components: {
    DetailNav,
    DetailSwiper,
    BaseInfo
  }
}
</script>

<style>

</style>