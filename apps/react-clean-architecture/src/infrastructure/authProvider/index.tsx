import Cookies from 'js-cookie'
import React, { createContext, useEffect } from 'react'
import { useHistory } from 'react-router'

const AuthContext = createContext({})

export const AuthProvider = ({ children }: any) => {
  const token = Cookies.get('token')
  const history = useHistory()

  // handle route change
  useEffect(() => {
    if (children.props.requirePermission && !token) history.push('/')
  }, [])

  return (
    <AuthContext.Provider value={{ history }}>{children}</AuthContext.Provider>
  )
}
