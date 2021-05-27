import axios from 'axios';
import {message,Modal} from 'antd';
import NProgress from 'nprogress';

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  config => {
    NProgress.start();
    return config
  },
  (error:any) => {
    NProgress.done();
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response:any) => {
    if(response.status === 200){
      return Promise.resolve(response)
    }else{
      return Promise.reject(response)
    }
    (error:any) => {
      if(error.response.status){
        switch(error.response.status){
          case 401:
            message.error('未登录')
          break;
          case 403:
            message.error('登录过期')
          break;
          case 404:
            message.error('资源不存在')
          break;
          default:
            message.error(error.response.data.message)
        }
        return Promise.reject(error.responsr)
      }
    }
  }
)
export function get(url:string,params:any){
  return new Promise((resolve:any,reject:any) :void => {
    axios.get(url,{
      params:params
    }).then((res:any) :void => {
      resolve(res)
    }).catch((err:any) :void => {
      reject(err)
    })
  })
}
export function post(url:any,params:any){
  return new Promise((resolve:any,reject:any) :void => {
    axios.get(url,{
      params:params
    }).then((res:any) :void => {
      resolve(res)
    }).catch((err:any) :void => {
      reject(err)
    })
  })
}
