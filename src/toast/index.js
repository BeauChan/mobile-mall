import Toast from './Toast'
const obj = {}
obj.install = function(Vue){
  //创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //new一个组件对象出来
  const toast = new toastConstructor()
  //创建一个div并将toast组件对象挂载上去
  toast.$mount(document.createElement('div'))
  //将挂载着toast的div追加到调用toast的组件的body上
  document.body.appendChild(toast.$el)
  //最后将toast挂载到Vue原型上
  Vue.prototype.$toast = toast
}
export default obj