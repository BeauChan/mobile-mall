<template>
    <!-- <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in banners" :key="item.item">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </el-carousel-item>
    </el-carousel>-->

    <van-swipe class="my-swipe" :autoplay="3500" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
</template>

<script>
// import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    // Swiper,
    // SwiperItem
  }
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #e7e7e7;
  opacity: 0.95;

  /* color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0; */
}
.van-swipe-item img {
  /* height: 100%; */
  width: 100%;
}
</style>