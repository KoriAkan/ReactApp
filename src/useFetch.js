import { useEffect, useState } from "react";

const useFetch= (url) => {
    const [userData, userdatachange] = useState(null); 
    const [isloaded, changeload] = useState(true); 
    const [errorInfo, setError] = useState(null); 
    
    useEffect(()=>{
      
        fetch(url).then(res => {
          
          if(!res.ok){
            throw Error("failed to load list");
          }
          return res.json()
        }).then(result=>{
          setTimeout(() => {
            userdatachange(result);
          changeload(false);
          },0)
          }).catch(res =>{
           
            setError(res.message);
            changeload(false);
          
        })
      }, [url])
      
      return {userData, isloaded, errorInfo}
}

export default useFetch;