<template>
  <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in banners" :key="item.item">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
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
.el-carousel__item img{
    width: 100%;

  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>