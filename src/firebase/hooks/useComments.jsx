import { useEffect, useState } from 'react'
import { getComments } from '../firebase'

const useComments = () => {
  const [comments, setComments] = useState([])
  const handleComments = (comments) => {
    setComments(comments)
  }
  useEffect(() => {
    const unsubscribe = getComments(handleComments)
    return unsubscribe
  }, [])

  return comments
}

export default useComments
