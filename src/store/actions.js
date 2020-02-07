import {COUNTER_ADD,ADD_NEW} from './mutation-types'

export default {
  addCartList({state,commit},payload){
    return new Promise((resolve,reject)=>{
      let temp = state.cartList.find(item=>item.id===payload.id)
    if(temp){
      // temp.count+=1
      commit(COUNTER_ADD,temp)
      resolve(`已加入购物车，当前数量: ${temp.count}`)
    }else{
      // state.cartList.push(payload)
      commit(ADD_NEW,payload)
      resolve('加入购物车成功√')
    }
    })
  }
}