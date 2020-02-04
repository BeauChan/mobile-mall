import {request} from 'network/request'

export function getDetailData(iid){
  return request({
    url: 'detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'recommend'
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

export class Shop {
  constructor(shopInfo){
    this.shopName = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.fans = shopInfo.cFans
    this.totalSales = shopInfo.cSells
    this.totalGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParams {
  constructor(itemParams){
    this.gParams = itemParams.info.set
    this.sizeDesc = itemParams.rule.tables
    this.gImage = itemParams.info.image ? itemParams.info.image[0] : ''
  }
}