<template>
  <div class="goods-item">
    <img :src="item.show.img" alt="" @load="imgLoaded">
    <div class="item-info">
      <p>{{item.title}}</p>
      <span>{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoaded(){
      this.$bus.$emit('imageLoaded')
    }
  }
}
</script>

<style>
.goods-item {
  width:48%;
}
.goods-item img{
  width:100%;
  border-radius: 5px;
}
.item-info {
  overflow: hidden;
  text-align: center;
    font-size: 14px;
}
.item-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* 除非遇到br才换行 */
}
.item-info span:nth-child(2) {
  color: var(--color-high-text);
  margin-right: 26px;
}
.item-info .collect {
    position: relative;

}
.item-info .collect::before {
  content: '';
    position: absolute;
    left: -15px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>