import {COUNTER_ADD,ADD_NEW,ALL_CHECKED,DEL_CART} from './mutation-types'

export default {
  [COUNTER_ADD](state,payload){
    payload.count+=1
  },
  [ADD_NEW](state,payload){
    payload.checks = true
    state.cartList.push(payload)
  },
  [ALL_CHECKED](state,payload){ //点击全选时
    state.cartList.forEach(item=>item.checks=payload)
  },
  [DEL_CART](state){
    state.cartList=state.cartList.filter(item=>!item.checks)
  }
}