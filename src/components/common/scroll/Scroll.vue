<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      bScroll: {}
    };
  },
  mounted() {
    this.bScroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    this.bScroll.on("scroll", position => {
      this.$emit("scrollPos", position);
    });
    this.bScroll.on('pullingUp',()=>{
      this.$emit('pulledUp')
    })
  },
  methods: {
    scrollTo(x, y, time = 600) {
      this.bScroll.scrollTo(x, y, time);
    },
    finPullUp(){
      this.bScroll.finishPullUp()
    },
    refreshScroll(){
      console.log('刷新scroll')
      this.bScroll.refresh()
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>