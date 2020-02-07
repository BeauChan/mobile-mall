<template>
  <div class="tick">
    <div class="tick-border" :class="{checked:isChecked1,notChecked:!isChecked1}">
      <img src="~assets/img/cart/tick.svg" alt="" v-show="isChecked1">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isChecked1:{
      type:Boolean,
      // default: true
    }
  }
}
</script>

<style>
/* .tick {
  position: relative;
  top: 47px;
  padding: 0 3px 0;
  margin: 0 4.5px 0;
} */
.tick-border {
  border-radius: 50%;
  width: 19px;
  height: 19px;
}
.tick img {
  width: 100%;
}
.notChecked {
  border: 1px solid rgb(138, 138, 138);
}
.checked {
  background-color: rgb(255, 72, 72); 
}
</style>