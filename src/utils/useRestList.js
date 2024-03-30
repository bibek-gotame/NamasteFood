import { useEffect, useState } from "react";
export const useResList = () =>{ 
    const [resList, setresList] = useState(null)
    
        useEffect( ()=>{   
             fetchData() 

        },[])
    
        const fetchData = async () =>{
            const data =  await fetch('https://www.swiggy.com/api/seo/getListing?lat=22.6573134&lng=88.3624076')
            const json = await data.json()
          console.log(json);
        }
        return resList 
    }
