import { createContext, ReactNode, useContext, useState } from "react";

type SolicitacaoModalContext = {
  isOpen: boolean;
  openModal: (matriculaAluno: string) => void;
  closeModal: () => void;
}

type SolicitacaoModalContextProviderProps = {
  children: ReactNode;
}

export const SolicitacaoModalContext = createContext({} as SolicitacaoModalContext)

export const SolicitacaoModalContextProvider = (props: SolicitacaoModalContextProviderProps) => {
  const [isOpen , setIsOpen] = useState(false);
  const [matriculaAluno, setmatriculaAluno] = useState('');

  const openModal = (matriculaAluno: string) => {  
    setIsOpen(true);
    setmatriculaAluno(matriculaAluno);
  }
  
  const closeModal = () => setIsOpen(false)

  return (
    <SolicitacaoModalContext.Provider value={{isOpen, openModal, closeModal}}>
      {props.children}
    </SolicitacaoModalContext.Provider>
  )
}

export const useSolicitacaoModalContext = () => {
  const value = useContext(SolicitacaoModalContext);
  return value;
}