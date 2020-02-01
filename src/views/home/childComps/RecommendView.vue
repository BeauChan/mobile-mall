<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
    width: 100%;
    text-align: center;
    padding: 8px 0 5px;
    border-bottom: 5px solid #eee;
}
.recommend-item {
  flex:1;
}
.recommend-item img {
 width: 100%; /* 图片不再超出屏幕 */
}
.recommend-item span {
  font-size: 17px;
}
</style>