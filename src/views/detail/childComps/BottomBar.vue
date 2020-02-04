<template>
  <div class="bottom-bar">
    <div class="bottom-item bottom-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon star"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-item bottom-right">
      <div class="cart">加入购物车</div>
      <div class="buy">现在买</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bottom-bar {
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  background-color: #fff;
  font-size: 13px;
  border-top: 0.1px solid rgb(192, 192, 192);
}
.bottom-item {
  flex: 1;
  display: flex;
}
.bottom-item > div {
  flex: 1;
}
.bottom-left .icon {
  display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bottom-left .service {
  background-position: 0 -52px;
}
.bottom-left .shop {
  background-position: 0 -98px;
}
.bottom-left .star {
  background-position: 0 2px;
}
.bottom-right {
  font-size: 16px;
  line-height: 49px;
}
.bottom-right .cart {
  background-color: rgb(255, 221, 16);
  color: rgb(66, 66, 66);
}
.bottom-right .buy {
  background-color: rgb(255, 120, 155);
  color: rgb(255, 255, 255);
}
</style>