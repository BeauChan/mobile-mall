<template>
  <div v-if="Object.keys(goodsComments).length !== 0" class="comment-info">
    <div class="comment-top">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-body">
      <div class="comment-user">
        <img :src="goodsComments.user.avatar" alt="">
        <span>{{goodsComments.user.uname}}</span>
      </div>
      <div class="comment-content">{{goodsComments.content}}</div>
      <div class="comment-other">
        <span>{{goodsComments.created | dataFormatter}}</span>
        <span>{{goodsComments.style}}</span>
      </div>
      <div class="comment-img">
        <img :src="img" v-for="(img,index) in goodsComments.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/util'
export default {
  props:{
    goodsComments:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    dataFormatter(val){
      const date = new Date(val*1000) //Date() 接收 ms
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style>
.comment-info{
  padding: 20px 15px;
  font-size: 16px;
}
.comment-top {
  border-bottom: 1px solid rgb(211, 211, 211);
  padding-bottom: 15px;
  position: relative;
}
.comment-top span:nth-child(2) {
  position: absolute;
  right: 6px;
}
.comment-body {
  margin-top: 5px;
}
.comment-user {
  padding: 8px 0;
}
.comment-user img{
  border-radius: 50%;
  width: 48px;
  vertical-align: middle;
}
.comment-user span{
  font-size: 17px;
  vertical-align: middle;
  margin-left: 6px;
}
.comment-content {
  font-size: 14px;
  line-height: 1.4;
  padding-bottom: 8px;
}
.comment-other {
  color:#999;
  font-size: 13px;
  padding-bottom: 8px;
}
.comment-other span:nth-child(1){
  padding-right: 10px;
}
.comment-img img{
  width: 75px;
  height: 75px;
  margin-right: 5px;
}
</style>