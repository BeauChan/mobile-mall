<template>
  <div></div>
</template>

<script>
import {getCat,getCatDetail} from 'network/category'
export default {

  created(){
    this.getCatList()
    this.getCatDetail()
  },
  methods:{
    getCatList(){
      getCat().then(res=>{
        console.log(res);
      })
    },
    getCatDetail(){
      getCatDetail().then(res=>{
        console.log(res);
        
      })
    }
  }
}
</script>

<style>

</style>