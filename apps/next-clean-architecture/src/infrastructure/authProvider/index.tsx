import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { createContext, useEffect } from 'react'
import routes from '../routes'

const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
  const token = Cookies.get('token')
  const router = useRouter()

  // handle route change
  useEffect(() => {
    function checkRoutes() {
      const findRoutes = routes.find((el: any) => el.url === router.pathname)

      console.log(findRoutes)

      // if (findRoutes.requirePermission && !token) router.push('/')
    }

    checkRoutes()
  }, [])

  return (
    <AuthContext.Provider value={{ router }}>{children}</AuthContext.Provider>
  )
}
