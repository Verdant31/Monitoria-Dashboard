import type { AppProps } from 'next/app'
import AuthContextProvider from '../contexts/AuthContext';
import RequisitosContextProvider from '../contexts/RequisitosContext';
import GlobalStyle from './global';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <AuthContextProvider>
        <RequisitosContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </RequisitosContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default MyApp
