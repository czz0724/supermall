import {request} from "./request"

export function GetCataTitle(){
  return request({
    url:"/category"
  })
}


export function GetCataItem(maitKey){
  return request({
    url:"/subcategory",
    params:{
      maitKey
    }
  })
}

export function GetCataItemGood(miniWallkey,type){
  return request({
    url:"/subcategory/detail",
    params:{
      miniWallkey,
      type
    }
  })
}