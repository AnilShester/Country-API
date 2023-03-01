import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios(url)
        const resData = response.data
        setData(resData)
      } catch (error) {
        setFetchError(error.response.data.message)
      }
      setIsLoading(false)
    }
    fetchData()
    setFetchError(false)
  }, [url])

  return { data, isLoading, fetchError }
}

export default useFetch
