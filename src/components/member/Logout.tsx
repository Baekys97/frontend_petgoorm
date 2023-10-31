import {useEffect} from 'react'
import Cookies from 'js-cookie';

export default function Logout(){
    const accessToken = Cookies.get('key');

    useEffect(() => {
        if (accessToken) {
            LogoutApi()
        } 

      }, [accessToken]);
    
}

export const LogoutApi = async() =>{
    
    try{
        Cookies.remove('key')
        alert('로그아웃 성공.')
        return window.location.replace('/');
      }catch(error){
        console.log(error);
      }
}