<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" @click="navClick(index)" :class="{active:currentIndex==index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods:{
    backClick(){
      this.$router.back()
    },
    navClick(index){
      this.currentIndex = index
    }
  }
}
</script>

<style>

.title {
  display: flex;
  font-size: 14px;
}
.title>div {
  flex: 1
}
.back>img {
  vertical-align: middle;
}
.active {
  color: var(--color-high-text);
}
</style>