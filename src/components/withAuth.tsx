import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const withAuth = (Component: React.ElementType) => {
  return () => {
    const router = useRouter()

    useEffect(() => {
      const token = localStorage.getItem('authToken')
      if (!token) {
        router.push('/login')
      }
    }, [])

    return <Component />
  }
}