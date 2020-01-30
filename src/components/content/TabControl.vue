<template>
  <div class="tab-control">
    <div v-for="(item,index) in items" :key="index" class="tab-control-item" @click="tabClick(index)">
      <span :class="{active:curIndex==index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    items:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      curIndex: 0
    }
  },
  methods:{
    tabClick(index){
      this.curIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  height: 39px;
  line-height: 39px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
  padding: 6px;
}
</style>