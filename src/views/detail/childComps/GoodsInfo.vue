<template>
  <div v-if="Object.keys(goodsDetail).length !== 0" class="goods-info">
    <div class="detail-desc">
      <div class="start"></div>
      <div class="desc">{{goodsDetail.desc}}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item,index) in goodsDetail.detailImage" :key="index">
      <div class="img-key">{{item.key}}</div>
      <div class="goods-imgs">
        <div v-for="(img,k) in item.list" :key="k">
          <img :src="img" alt @load="imgLoad"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsDetail: {
      type: Object
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoaded')
    }
  }
  // mounted(){
  //   // this.$emit('imgLoaded')
  //   this.imgLoad()
  // }
}
</script>

<style>
.goods-info {
  padding: 5px 3px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-desc {
  font-size: 15px;
}
.detail-desc .start,
.detail-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.detail-desc .start {
  float: left;
}
.detail-desc .end {
  float: right;
}
.detail-desc .start::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: -5px;
}
.detail-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.detail-desc .start::before {
  left: 0;
}
.detail-desc .end::after {
  right: 0;
}
.detail-desc .desc {
  padding: 15px 10px 5px;
}
.img-key {
  margin: 10px 0 10px 6px;
  color: #333;
  font-size: 17px;
}
.goods-imgs img {
  width: 100%;
}
</style>