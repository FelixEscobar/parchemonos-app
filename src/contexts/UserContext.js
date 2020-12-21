import React, { useState, createContext } from 'react'
import { useEffect } from 'react'

const initialState = {
  name: '',
  email: '',
  identification: '',
  phone: '',
  isAuthenticated: false
}

export const UserContext = createContext(initialState)

export const UserContextStore = (props) => {

  const [user, setUser] = useState(initialState)
  useEffect(() => {
    console.log('ejecutando contexto de usuario')
    checklocalToken()
  }, [])

  const checklocalToken = () => {
    const token = localStorage.getItem('TOKEN')
    if (token){
      setUser({isAuthenticated: true})
    }
  }


  return (
    <UserContext.Provider value={{ user, setUser }}>
      { props.children }
    </UserContext.Provider>
  )
}
