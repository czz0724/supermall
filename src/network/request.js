import axios from"axios"

//封装实例
export function request(config) {

  //创建实例
  const instance = axios.create({
    baseURL:"http://152.136.185.210:7878/api/m5",
    timeout:50000
  })
  instance.interceptors.request.use(config=>{
    return config
  })
  //拦截器
  instance.interceptors.response.use(res =>{

    return res
  })
  return instance(config)
}