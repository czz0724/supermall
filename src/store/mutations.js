import {
  ADD_COUNTER,
  ADD_TO_CART,
  ISCHEKED,
  CARTBOTTOMBARNUM,
  ISSHOW,

} from "./mutations_types"

export default {
  //添加个数
  [ADD_COUNTER](state, oldproduct) {
    oldproduct.count++
  },

  //添加商品 及 添加参数 
  [ADD_TO_CART](state, product) {
    product.count = 1
    product.cheked = true

    state.carList.push(product)
  },

  //判断点击
  [ISCHEKED](state, iid) {
    let a = state.carList.find(item => item.iid == iid)
    a && (a.cheked = !a.cheked)
  },

  //判断是否全选和全选商品
  [CARTBOTTOMBARNUM](state) {
    let length = state.carList.length
    let unlength = state.carList.filter(item => item.cheked).length
    if (length > unlength) {
      for (let item of state.carList) {
        item.cheked = true
      }
    } else if (length == unlength) {
      for (let item of state.carList) {
        item.cheked = false
      }
    }
  },

}
