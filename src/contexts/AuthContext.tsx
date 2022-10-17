import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { User } from '../utils/types'
import { useRouter } from 'next/router'
import { api } from '../services/axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

type AuthContextType = {
  user: User | undefined
  logIn: (matricula: string, senha: string) => void
  logOut: () => void
  isAuthenticated: boolean
}

type AuthContextProviderPros = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = (props: AuthContextProviderPros) => {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user
  const router = useRouter()

  useEffect(() => {
    const { 'monitoria.token': token } = parseCookies()
    if (token) {
      api
        .get('/auth/me')
        .then((res) => {
          const { role, matricula, nome } = res.data
          setUser({ matricula, role, nome })
          if (role === 'Coordenador') {
            router.push('/DashCord')
          } else {
            router.push('/DashProf')
          }
        })
        .catch((err) => {
          destroyCookie(undefined, 'monitoria.token')
          destroyCookie(undefined, 'monitoria.refreshToken')
          console.log(err)
          logOut()
        })
    }
  }, [])

  const logIn = async (matricula: string, senha: string) => {
    await api
      .post('/auth/login/colaborador', { matricula, senha })
      .then((res) => {
        const { role, token, matricula, refreshToken, nome } = res.data
        setUser({ matricula, role, nome })
        setCookie(undefined, 'monitoria.token', token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        })
        setCookie(undefined, 'monitoria.refreshToken', refreshToken, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: '/',
        })
        api.defaults.headers.common.Authorization = `${token}`
        if (role === 'Coordenador') {
          router.push('/DashCord')
        } else {
          router.push('/DashProf')
        }
      })
  }
  const logOut = () => {
    destroyCookie(undefined, 'monitoria.token')
    destroyCookie(undefined, 'monitoria.refreshToken')
    setUser(undefined)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logIn, logOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuth = () => {
  const value = useContext(AuthContext)
  return value
}
