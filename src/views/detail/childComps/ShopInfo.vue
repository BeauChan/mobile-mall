<template>
  <div class="shop-info">
    <div class="logo-name">
      <img :src="shop.shopLogo" alt />
      <span>{{shop.shopName}}</span>
    </div>
    <div class="shop-detail">
      <div class="shop-detail-item shop-detail-left">
        <div class="total-sales">
          <span class="sells-count">{{shop.totalSales | totalSalesFilter}}</span>
          <span>总销量</span>
        </div>
        <div class="total-goods">
          <span class="goods-count">{{shop.totalGoods}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-detail-item shop-detail-right">
        <table>
          <tr v-for="(obj,index) in shop.score" :key="index">
            <td>{{obj.name}}</td>
            <td class="score" :class="{'score-better':obj.isBetter}">{{obj.score}}</td>
            <td
              class="is-better"
              :class="{'is-better-more':obj.isBetter}"
            >{{obj.isBetter ? "高":"低"}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default: {}
    }
  },
  filters:{
    totalSalesFilter(arg){
      if(arg<10000) return arg
      if(arg>=10000) return Math.round(arg/1000)/10 + '万'
    }
  }
}
</script>

<style>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.logo-name {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
  font-size: 18px;
}
.logo-name img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.logo-name span {
  margin-left: 12px;
}
.shop-detail {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-detail-item {
  flex: 1;
}
.shop-detail-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.total-sales span {
  display: block;
}
.total-goods span {
  display: block;
}
.sells-count,
.goods-count {
  font-size: 18px;
}
.sells-count + span,
.goods-count + span {
  font-size: 12px;
  margin-top: 10px;
}
.shop-detail-right {
  font-size: 13px;
  color: #333;
}
.shop-detail-right table {
  width: 120px;
  margin-left: 30px;
}
.shop-detail-right table td {
  padding: 2.5px 0;
}
.shop-detail-right .score {
  /* 默认绿色 */
  color: #5ea732;
  text-align: center;
}
.shop-detail-right .score-better {
  color: #f13e3a;
}
.shop-detail-right .is-better {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
  border-radius: 5px;
}
.shop-detail-right .is-better-more {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>