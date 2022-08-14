import type { AppProps } from 'next/app'
import AuthContextProvider from '../contexts/AuthContext';
import RequisitosContextProvider from '../contexts/RequisitosContext';
import { SolicitacaoModalContext, SolicitacaoModalContextProvider, useSolicitacaoModalContext } from '../contexts/SolicitacaoModalContext';
import GlobalStyle from './global';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <AuthContextProvider>
        <SolicitacaoModalContextProvider>
          <RequisitosContextProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </RequisitosContextProvider>
        </SolicitacaoModalContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default MyApp
