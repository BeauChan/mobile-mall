<template>
  <div id="tab-bar">
    <!-- <div id="tab-bar" @click="tabClick"> -->
      <!-- <div id="tab-bar">
      <div class="tab-bar-item">
        <img src="../../assets/img/shouye.svg" alt="">
        首页
      </div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
      </div>-->
      <!-- <slot></slot> -->
      <!-- <div class="tab-bar-item" @click="homeClick">
        <img v-if="!isActive" src="../../assets/img/shouye.svg" alt />
        <img v-else src="../../assets/img/shouye_hover.svg" alt />
        <div :class="{active: isActive}">首页</div>
      </div>
      <div class="tab-bar-item" @click="categoryClick">
        <img v-if="!isActive" src="../../assets/img/fenlei.svg" alt />
        <img v-else src="../../assets/img/fenlei_hover.svg" alt />
        <div>分类</div>
      </div>
      <div class="tab-bar-item" @click="cartClick">
        <img v-if="!isActive" src="../../assets/img/gouwuche.svg" alt />
        <img v-else src="../../assets/img/gouwuche.svg" alt />
        <div>购物车</div>
      </div>
      <div class="tab-bar-item" @click="profileClick">
        <img v-show="!isActive" src="../../assets/img/wo.svg" alt />
        <img v-show="isActive" src="../../assets/img/wo_hover.svg" alt />
        <div>我的</div>
      </div> -->
    <!-- </div> -->

    <slot></slot>
  </div>
</template>

<script>
// import TabBarItem from "./TabBarItem"

export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    tabClick() {
      this.isActive = false;
    },
    homeClick() {
      this.$router.replace("/home");
      this.isActive = !this.isActive;
    },
    categoryClick() {
      this.isActive = !this.isActive;
      this.$router.replace("/category");
    },
    cartClick() {
      this.isActive = !this.isActive;
      this.$router.replace("/cart");
    },
    profileClick() {
      this.isActive = !this.isActive;
      this.$router.replace("/profile");
    }
  },
  components: {
    // TabBarItem
  }
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f3f3f3;
  box-shadow: 0 -2px rgba(100, 100, 100, 0.2);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>