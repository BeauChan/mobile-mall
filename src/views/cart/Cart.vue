<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车 ({{cartSize}})</div>
    </nav-bar>
    <scroll class="scroll-content" ref="scroll">
      <cart-content :cartItems="cartItems"></cart-content>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartContent from './childComps/CartContent'
import Scroll from "components/common/scroll/Scroll";
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {

  components: {
    NavBar,
    CartContent,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartSize','cartItems'])
  },
  activated(){
    this.$refs.scroll.refreshScroll()
  }
}
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
}
.scroll-content {
  position: absolute;
  top: 41px;
  bottom: 87px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>