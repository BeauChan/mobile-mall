<template>
  <div class="tab-bar-item" @click="tabItemClick">
    <div v-if="!isActive">
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-act"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1; //computed和watch是组件自动调用的！
    }
  },
  methods: {
    tabItemClick() {
      this.$router.replace(this.path);
      // this.isActive = this.$route.path.indexOf(this.path) !== -1 ? true : false;
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 5px;
}
.active {
  color: red;
}
</style>