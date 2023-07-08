import { useEffect } from 'react'

export const onClient = () => new Promise<void>((resolve, reject) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      resolve()
    }
  }, [])
})

