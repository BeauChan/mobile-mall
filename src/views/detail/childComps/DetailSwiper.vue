<template>
  <van-swipe class="my-swipe" :autoplay="3500" indicator-color="#ff5777" :height="320">
    <van-swipe-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
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