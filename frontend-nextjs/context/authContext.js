import { useRouter } from 'next/router';
import { createContext, useState, useEffect } from 'react';

const baseUrl = process.env.BASE_API_URL;

const AuthContext = createContext({
  user: null,
  signup: () => {},
  login: () => {},
  logout: () => {},
  authReady: false, 
})

export const AuthContextProvider = ({children}) => {
  
  const [user, setUser] = useState<any>(null)

  const router = useRouter()

  useEffect(() => {
    if(user === null){
        router.push('/auth')
      }
  }, [user])

  const signup = async (data) => {
    try {
      const result = await fetch('/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
  
      })
      const {success, data} = await result.json()
      if(success){
        setUser(data)
      } else {
        // acción a ejecutar si el signup falla
      }
    } catch (error) {
      // acción a ejecutar si el signup falla
    }
  }

  const login = async (data) => {
    try {
          // fetch a login
      const result = await fetch('/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
  
      })
      const {success, data} = await result.json()
      if(success){
        setUser(data)
      } else {
        // acción a ejecutar si el login falla
      }
    } catch (error) {
      // acción a ejecutar si el login falla
    }
  }
  const logout = async () => {
    router.push('ruta')
    // redirección del usuario a una página que no sea privada
    try {
      // fetch a logout
      const result = await fetch(`${baseUrl}auth/logout`)
      const {success} = await result.json()
      if(success){
        setUser(null)
      } else {
        // acción a ejecutar si el logout falla
      }
    } catch (error) {
      // acción a ejecutar si el logout falla
    }
  }
  
  let context = {
    user: user,
    login,
    logout,
    signup
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>  
  )
}

export default AuthContext;