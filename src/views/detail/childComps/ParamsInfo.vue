<template>
  <div class="params-info">
    <table v-for="(table,index) in goodsParams.sizeDesc" :key="index" class="size-desc">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>

    <table class="g-params-set">
      <tr v-for="(tr,index) in goodsParams.gParams" :key="index">
        <td class="param-set-key">{{tr.key}}</td>
        <td class="param-set-val">{{tr.value}}</td>
      </tr>
    </table>

    <div v-if="goodsParams.gImage" class="g-image">
      <img src="goodsParams.gImage" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  position: relative;
}
.size-desc {
  width: 100%;
  border-collapse: collapse;
}
.size-desc tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.g-params-set {
  /* 使border-bottom生效 */
  border-collapse: collapse;
  margin-top: 6px;
}
.g-params-set tr {
  height: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.g-params-set tr td{
  padding: 3px;
}
.param-set-val {
  color: var(--color-high-text);

}
.param-set-key {
  width: 95px;
}
</style>