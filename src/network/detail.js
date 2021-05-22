import {request} from "./request"

export function getDetail(iid){
  return request({ 
    url:"/detail",
    params:{
      iid
    }
  })
}

export function recommend(){
  return request({ 
    url:"/recommend",
  })
}

export class Goods{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.newPrice
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
  }
}

export class ShopInfo{
  constructor(shopInfo){
    this.name = shopInfo.name
    this.cGoods = shopInfo.cGoods
    this.shopLogo = shopInfo.shopLogo
    this.cFans = shopInfo.cFans
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score

  }
}


export class Goodsinfo{
  constructor(info,rule){
    this.set = info.set
    this.tables = rule?rule.tables:""
    this.images = info.images?info.images[0]:""
  }
}