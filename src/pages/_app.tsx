import type { AppProps } from 'next/app'
import AuthContextProvider from '../contexts/AuthContext'
import { SolicitacaoModalContextProvider } from '../contexts/SolicitacaoModalContext'
import GlobalStyle from './global'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer pauseOnHover={false} />
      <AuthContextProvider>
        <SolicitacaoModalContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </SolicitacaoModalContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default MyApp
