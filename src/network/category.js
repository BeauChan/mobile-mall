import {request} from 'network/request'

export function getCat(){
  return request({
    url:'/category'
  })
}
export function getCatDetail(){
  return request({
    url:'/subcategory'
  })
}