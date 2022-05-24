import styled from "styled-components";
import { IconButton } from "@mui/material";
import { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type RequisitosContext = {
  requisitos: ReactJSXElement[] | undefined;
  handleAddRequisito: (requisito: string | undefined) => void;
  handleDeleteRequisito: (idRequisito: string) => void;
}

type RequisitosContextProviderProps = {
  children: ReactNode;
}

export const RequisitosContext = createContext({} as RequisitosContext)

const RequisitosContextProvider = (props: RequisitosContextProviderProps) => {
  const [ requisitos, setRequisitos ] = useState<ReactJSXElement[]>([])

  const handleAddRequisito = (preRequisito: string | undefined) => {
    const component = (
      <PreRequisitosContainer key={preRequisito}>
        <PreRequisitoDesc>* {preRequisito}</PreRequisitoDesc>
        <IconButton onClick={() => handleDeleteRequisito(preRequisito)} style={{position: 'absolute', right: '0', padding: '0', bottom: '3px'}}>
            <DeleteIcon fontSize="large" sx={{color: '#f2f2f2', width: '2.7rem', height: '2.7rem', paddingTop: '0.4rem'}} />
        </IconButton>
      </PreRequisitosContainer>
    )
    setRequisitos([...requisitos, component]); 
  }

  const handleDeleteRequisito = (idRequisito: string | undefined) => {
    setRequisitos(requisitos.filter(requisito => requisito.key !== idRequisito));
  }

  return (
    <RequisitosContext.Provider value={{requisitos, handleDeleteRequisito, handleAddRequisito}}>
      {props.children}
    </RequisitosContext.Provider>
  )
}
export default RequisitosContextProvider;

export const useRequisitos = () => {
  const value = useContext(RequisitosContext);
  return value;
}



export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const PreRequisitosContainer = styled.div`
  display: flex;
  position: relative;
  width: 35.1rem;
  height: 3rem;
  margin: auto;
  align-items: center;
`

export const PreRequisitoDesc = styled.p`
  font-size: 1.3rem;
`