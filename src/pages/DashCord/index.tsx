import { useEffect, useState } from "react";
import SolicitacoesLista from "../../components/ListaSolicitacoes";
import SideBar from "../../components/SideBar";
import { useAuth } from "../../contexts/AuthContext"
import { Solicitacao } from "../../utils/types";
import { Container, MainContainer, Title } from "./styles"
import data from '../../../solicitacoes.json';

const DashProf = () => {
  const [ solicitacoes, setSolicitacoes ] = useState<Solicitacao[]>([])
  const { user } = useAuth();

  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title>Solicitações</Title>
        {solicitacoes 
          ? <SolicitacoesLista solicitacoes={data}/>
          : <h1>Você não tem solicitações no momento.</h1>
        }
      </MainContainer>
    </Container>
  )
}
export default DashProf