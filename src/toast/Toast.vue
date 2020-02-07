<template>
  <div class="toast" v-show="isShow" :class="{fade:isShow}">
    <span>{{toastMsg}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      toastMsg: '',
      toastTimer: null
    }
  },
  methods: {
    showToast(msg = 'null', duration = 2100) {
      clearTimeout(this.toastTimer) //连续点击添加时最好刷新定时器
      this.isShow = true
      this.toastMsg = msg
      this.toastTimer = setTimeout(() => {
        this.isShow = false
        this.toastMsg = ''
      }, duration)
    }
  }
}
</script>

<style>
.toast {
  white-space: nowrap;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 999;
  font-size: 18px;
  background-color: rgb(0, 0, 0);
  color: #fff;
  border-radius: 10px;
  padding: 9px;
  opacity: 0.8;
}
/* .fade {
  animation: hidetip 1s 1;
  animation-fill-mode: forwards;
}
@keyframes hidetip {
  from {
    opcity: 1;
  }
  to {
    opacity: 0;
  }
} */
</style>