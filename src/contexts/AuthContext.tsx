import { createContext, ReactNode, useContext, useState } from 'react'
import { User } from '../utils/types'
import { useRouter } from 'next/router'
import { api } from '../services/axios'
import axios from 'axios'

type AuthContextType = {
  user: User | undefined
  logIn: (matricula: string, senha: string) => Promise<string>
  logOut: () => void
}

type AuthContextProviderPros = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = (props: AuthContextProviderPros) => {
  const [user, setUser] = useState<User>()
  const router = useRouter()

  const logIn = async (matricula: string, senha: string) => {
    const temporaryName = 'Haissam'

    return await api
      .post('/auth/login/colaborador', { matricula, senha })
      .then((res) => {
        const { role, token } = res.data
        localStorage.setItem('token', token)
        axios.defaults.headers.common = { Authorization: token }
        setUser({ matricula, role, token, nome: temporaryName })
        return role
      })
  }
  const logOut = () => {
    setUser(undefined)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => {
  const value = useContext(AuthContext)
  return value
}
