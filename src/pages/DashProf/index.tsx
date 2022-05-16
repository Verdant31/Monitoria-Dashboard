import { useEffect, useState } from "react";
import SolicitacoesLista from "../../components/ListaSolicitacoes";
import LogoutButton from "../../components/LogutButton";
import { useAuth } from "../../contexts/AuthContext"
import { Solicitacao } from "../../utils/types";
import { Container, Title } from "./styles"

const DashProf = () => {
  const [ solicitacoes, setSolicitacoes ] = useState<Solicitacao[]>()
  const { user } = useAuth();

  useEffect(() => {
    if(user?.solicitacoes) setSolicitacoes(user.solicitacoes)
  },[])

  return (
    <Container>
      <LogoutButton />
      <Title>Solicitações</Title>
      {solicitacoes 
        ? <SolicitacoesLista solicitacoes={solicitacoes}/>
        : <h1>Você não tem solicitações no momento.</h1>
      }
    </Container>
  )
}
export default DashProf