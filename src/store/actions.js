import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations_types"

export default {
  
  carList(context,product){
    return new Promise((resolve,rejevt)=>{
      const oldproduct = context.state.carList.find(item=>item.iid ==product.iid)
      if(oldproduct){
        context.commit(ADD_COUNTER,oldproduct)
        resolve("商品数量+1")
      }else{
        context.commit(ADD_TO_CART,product)
        resolve("成功加入购物车")
      }
    })
  }
}