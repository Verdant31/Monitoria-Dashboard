import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
let cookies = parseCookies()
let isRefreshing = false
let failedRequestsQueue: any = []
export const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

api.defaults.headers.common.Authorization = `${cookies['monitoria.token']}`
api.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error.response?.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        cookies = parseCookies()
        const { 'monitoria.refreshToken': refreshToken } = cookies
        const orinalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true
          api
            .post('/auth/refresh', { refreshToken })
            .then((res) => {
              const { token } = res.data
              setCookie(undefined, 'monitoria.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
              })
              setCookie(
                undefined,
                'monitoria.refreshToken',
                res.data.refreshToken,
                {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                },
              )

              api.defaults.headers.common.Authorization = `${cookies['monitoria.token']}`
              failedRequestsQueue.forEach((request: any) =>
                request.onSuccess(token),
              )
              failedRequestsQueue = []
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request: any) =>
                request.onFailure(err),
              )
              failedRequestsQueue = []
            })
            .finally(() => {
              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              orinalConfig.headers.Authorization = `${token}`
              resolve(api(orinalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            },
          })
        })
      } else {
        console.log('Deslogar o usuario')
      }
    }
  },
)
