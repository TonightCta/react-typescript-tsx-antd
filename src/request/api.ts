import {get,post} from './http'

const url:string = 'https://www.baidu.com'

export const testApi:any = (p:any) : any => get(url + 'api/test',p);
