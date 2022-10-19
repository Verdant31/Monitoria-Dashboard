import { createContext, ReactNode, useContext, useState } from 'react'
import { SolicitacaoController } from '../api/SolicitacaoController'

type SolicitacaoModalContextProps = {
  isOpen: boolean
  openModal: (id: string) => void
  recusarSolicitacao: (justificativa: string) => Promise<void>
  closeModal: () => void
  revemodSolicitacaoId: string
}

type SolicitacaoModalContextProviderProps = {
  children: ReactNode
}

export const SolicitacaoModalContext = createContext(
  {} as SolicitacaoModalContextProps,
)

export const SolicitacaoModalContextProvider = (
  props: SolicitacaoModalContextProviderProps,
) => {
  const [solicitacaoId, setSolicitacaoId] = useState('')
  const [revemodSolicitacaoId, setRemovedSolicitacaoId] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const openModal = (id: string) => {
    setIsOpen(!isOpen)
    setSolicitacaoId(id)
  }
  const closeModal = () => setIsOpen(false)
  const recusarSolicitacao = async (justificativa: string) => {
    setRemovedSolicitacaoId(solicitacaoId)
    await SolicitacaoController.getInstance().recusarSolicitacao(
      solicitacaoId,
      justificativa,
    )
  }

  return (
    <SolicitacaoModalContext.Provider
      value={{
        isOpen,
        closeModal,
        openModal,
        recusarSolicitacao,
        revemodSolicitacaoId,
      }}
    >
      {props.children}
    </SolicitacaoModalContext.Provider>
  )
}

export const useSolicitacaoModalContext = () => {
  const value = useContext(SolicitacaoModalContext)
  return value
}
