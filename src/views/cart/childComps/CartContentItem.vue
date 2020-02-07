<template>
  <div class="cart-item">
    <div class="chkBtn">
      <check-button :isChecked1="item.checks" @click.native="checkClick"></check-button>
    </div>
    <div >
      <img :src="item.image" alt class="cart-item-img"/>
    </div>
    <div>
      <div class="title">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
      <div class="item-bottom">
        <span class="price">￥{{item.price}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/CheckButton'
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    checkClick(){
      this.item.checks = !this.item.checks
    }
  }
}
</script>

<style>
.cart-item {
  display: flex;
  font-size: 17px;
  border-bottom: 2px solid rgba(199, 165, 165, 0.5);
  margin: 0 2px 0 2px;
  border-radius: 0 0 8px 8px;
}
.cart-item .chkBtn {
  display: flex;
  align-items: center;
  padding: 0 5px;
}
.cart-item-img {
  width: 75px;
  height: 100px;
  border-radius: 4px;
  margin:6px 8px 3px 1px;
}
.cart-item .title {
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
  width: 250px;
  padding: 8px 0 12px 4px;
  color: rgb(65, 65, 65);
}
.cart-item .desc {
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
  width: 250px;
  padding: 8px 0 29px 4px;
  font-size: 12px;
  color: rgb(0, 0, 0);
  opacity: 0.45;
}
/* .item-bottom {
  
} */
.cart-item .price {
  color: rgb(255, 51, 0);
}
.cart-item .count {
  position: absolute;
  right: 13px;
}
</style>