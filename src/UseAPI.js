import axios from 'axios'
import { useState, useEffect } from 'react'


const useAPI = endpoint => {
  const [data, setData] = useState([]) // initial state empty array


  // To call data when component is monted
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  const getData = async() => {
    const response = await axios.get(endpoint)
    setData(response.data)
  }
  return data;
}

export default useAPI