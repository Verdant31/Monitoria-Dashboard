import type { AppProps } from 'next/app'
import LogoutButton from '../components/LogutButton';
import AuthContextProvider from '../contexts/AuthContext';

import GlobalStyle from './global';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <AuthContextProvider>
      <GlobalStyle />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  )
}

export default MyApp
