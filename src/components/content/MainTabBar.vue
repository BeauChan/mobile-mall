<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tab-icon" src="~assets/img/tabbar/home.svg" />
      <img slot="tab-icon-act" src="~assets/img/tabbar/home_active.svg" />
      <div slot="tab-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tab-icon" src="~assets/img/tabbar/category.svg" />
      <img slot="tab-icon-act" src="~assets/img/tabbar/category_active.svg" />
      <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="tab-icon" src="~assets/img/tabbar/shopcart.svg" />
      <img slot="tab-icon-act" src="~assets/img/tabbar/shopcart_active.svg" />
      <div slot="tab-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="tab-icon" src="~assets/img/tabbar/profile.svg" />
      <img slot="tab-icon-act" src="~assets/img/tabbar/profile_active.svg" />
      <div slot="tab-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>