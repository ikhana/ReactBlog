import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error , setError] = useState(null)
        
        
        useEffect(()=>{
            setTimeout(() =>{
                fetch(url).then(res =>{
                    if (!res.ok){
                        throw Error('No resources found')
                    }
                    return res.json(
                        
                    )
                 }).then(data =>{
                     setData(data)
                     setLoading(false)
                     setError(null)
                 })
                 .catch((e) =>{
                     setLoading(false)
                     setError(e.message)
                     
                 })
            },1000)
           
        },[url])
        return   {data, loading, error}
}


export default useFetch;