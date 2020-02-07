<template>
  <div class="cart-content">
    <div v-if="cartItems.length!=0">
      <cart-content-item v-for="(item,index) in cartItems" :key="index" :item="item"></cart-content-item>
    </div>
    <div v-else class="cart-empty">
      这里空空如也 ~
    </div>
  </div>
</template>

<script>
import CartContentItem from './CartContentItem'
export default {
  props: {
    cartItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    CartContentItem
  }
}
</script>

<style>
.cart-empty {
  text-align: center;
  position: relative;
  top:200px;
  font-size: 16px;
}
</style>