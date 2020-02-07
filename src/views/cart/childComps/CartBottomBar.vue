<template>
  <div class="cart-bottom-bar">
    <div class="chkAll">
      <!-- 要么点击全选，此时两个都为true。要么所有物品被选中，第二个为true -->
      <check-button @click.native="isCheckedAll" :isChecked1="isAllTicked||isAllChecked"></check-button>
      <span>全选</span>
    </div>
    <div class="cart-del" @click="cartDel" v-show="haveChecked">删除</div>
    <div class="total">合计: ￥{{cartTotals}}</div>
    <div class="settlement" @click="settlementClick">去结算({{chkCount}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/CheckButton'
import { mapGetters } from 'vuex'
import { ALL_CHECKED, DEL_CART } from 'store/mutation-types'

export default {
  components: {
    CheckButton
  },
  data() {
    return {
      isAllTicked: false
    }
  },
  computed: {
    ...mapGetters(['cartItems']),
    cartTotals() {
      return this.cartItems.filter(item => item.checks)
        .reduce((preVal, val) => preVal + val.price * val.count, 0)
    },
    chkCount() {
      return this.cartItems.filter(item => item.checks).length
    },
    isAllChecked() { //注意和下面CheckedAll区别，这里表示监控购物车勾选情况
      // console.log(!this.cartItems.find(item => item.checks === false));
      if (this.cartItems.length == 0) return false //购物车为空时，默认不勾全选
      const newArr = this.cartItems.find(item => item.checks === false)  //只要有一个没勾选(false)，length就不为0，此时取反后得false
      return newArr ? false : true
    },
    haveChecked() {
      return this.cartItems.find(item => item.checks === true)
    }
  },
  methods: {
    isCheckedAll() {
      this.isAllTicked = !this.isAllTicked
      this.$store.commit(ALL_CHECKED, this.isAllTicked)
    },
    cartDel() {
      this.$store.commit(DEL_CART)
    },
    settlementClick() {
      // if(!this.isAllTicked)
      //   this.$toast.showToast('未选中商品！')
      if (!this.cartItems.find(item => item.checks))
        this.$toast.showToast('未选中商品！')
    }
  }
}
</script>

<style>
.cart-bottom-bar {
  height: 41px;
  width: 100%;
  background-color: rgb(246, 246, 246);
  position: absolute;
  bottom: 46px;

  display: flex;

  font-size: 16px;
  box-shadow: 0 -1px rgba(100, 100, 100, 0.1);
}
.cart-bottom-bar .chkAll {
  display: flex;
  align-items: center;
  padding-left: 11px;
  width: 79px;
}
.chkAll > span {
  padding-left: 3px;
}
.cart-bottom-bar .total {
  line-height: 41px;
  flex: 1;
  text-align: right;
  padding-right: 6px;
  font-size: 15px;
}
.settlement {
  background-color: rgb(255, 23, 23);
  color: #fff;
  padding: 0 16px;
  line-height: 41px;
  font-size: 17px;
}
.cart-del {
  line-height: 45px;
  font-size: 14px;
  color: rgb(255, 17, 0);
}
</style>