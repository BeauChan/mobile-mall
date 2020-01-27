<template>
<div class="goods-list">
  <goods-list-item v-for="(item,index) in s_goods" :key="index" :item="item"></goods-list-item>
</div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  props:{
    s_goods:{
      type: Array,
      default(){
        return [];
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>