<template>
  <!-- 判断goods是否为空，否则报 '0' of undefined  -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="goods-title">{{goods.title}}</div>
    <div class="price-info">
      <span>{{goods.newPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>
    <div class="sales-info">
      <span v-for="i in 2" :key="i">{{goods.columns[i-1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div  class="service-info">
      <span v-for="(item,index) in goods.services" :key="index"  class="service-info-item">
        <span v-if="index < goods.services.length-1">
          <img :src="item.icon" alt />
          {{item.name}}
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.goods-title {
  font-size: 18px;
  font-weight: 700;
  padding: 0 0 10px 0px;
  color: rgb(73, 73, 73);
  line-height: 24px;
}
.price-info {
  margin: 0 0 16px 0;
}
.price-info > span:nth-child(1) {
  color: var(--color-high-text);
  font-size: 26px;
  margin-left: 6px;
}
.price-info > span:nth-child(2) {
  color: var(--color-text);
  text-decoration: line-through;
  margin-left: 6px;
  font-size: 16px;
}

.price-info > span:nth-child(3) {
  border-radius: 8px;
  background-color: var(--color-high-text);
  color: var(--color-background);
  padding: 3px;
  margin-left: 3px;

  position: relative;
  top: -10px;
  font-size: 12px;
  opacity: 0.85;
}
.sales-info {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.sales-info > span:nth-child(1) .sales-info > span:nth-child(3) {
  width: 10px;
}
.service-info {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.service-info-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.service-info>span {
  font-size: 13px;
  color: #333;
}
</style>