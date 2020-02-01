import {request} from 'network/request'

export function getDetailData(iid){
  return request({
    url: 'detail',
    params:{
      iid
    }
  })
}

export class Goods {
  constructor(columns,itemInfo,shopInfo){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc

    this.columns = columns
    this.services = shopInfo.services
  }
}