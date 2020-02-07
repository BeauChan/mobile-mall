<template>
<div class="goods-list">
  <goods-list-item v-for="(item,index) in goodsList" :key="index" :item="item" :page-id="pageId"></goods-list-item>
</div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
  props:{
    goodsList:{
      type: Array,
      default(){
        return [];
      }
    },
    pageId: {  //home:0，detail:1
      type: Number,
      default() {
        return 0
      }
    }
  },
  components:{
    GoodsListItem
  },
  // mounted(){
  //   console.log(this.s_goods);
    
  // }
  // computed:{
  //   getList(){
  //     this.s_goods = s_goods
  //   }
  // }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>