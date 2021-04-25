import {request} from "./request"

export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}
export function getHomegoods(type,page){
  return request({
    url:"/home/data",
    params:{
      page,
      type
    }
  })
}