import React, { useState , useEffect} from 'react'
import axios from "axios"

const useAxios = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] =  useState(null)

  const fetchData = async () => {
      setLoading (true)
      try {
          const response = await axios.get(url)
          setData(response.data)
          setError(null)
      }

      catch(err){
          setError(err)
      }

      finally{
          setLoading(false)
      }
  }


  useEffect(() => {
    fetchData()
  }, [url])

  return {data, loading, error}
}


export default useAxios