import axios, { AxiosError, AxiosResponse } from 'axios';
import { store } from '../app/store/configureStore';

axios.defaults.baseURL='http://localhost:5000/';

const responseBody=(response:AxiosResponse)=>response.data;

axios.interceptors.request.use(config=>{
    const token=store.getState().account.user?.token;
    if(token) config.headers.Authorization=`Bearer ${token}`;
    return config;
})

axios.interceptors.response.use(response=>{
    return response
},(error:AxiosError)=>{
   // console.log('caught by interceptor');
})

const requests={
    get:(url:string)=>axios.get(url).then(responseBody),
    post: (url: string, body: any) => axios.post(`${url}?${new URLSearchParams(body).toString()}`).then(responseBody),
    put:(url:string,body:{})=>axios.put(url,body).then(responseBody),
    delete:(url:string)=>axios.delete(url).then(responseBody),
}
const Catalog={
    list:()=>requests.get('destination'),
    details:(id:number)=>requests.get(`destination/${id}`)
}
const Account={
    login:(values:any)=>requests.post('login',values),
        
    register:(values:any)=>requests.post('register',values),
    currentUser:()=>requests.get('currentUser'),
}

const agent={
    Catalog,
    Account
}
export default agent;