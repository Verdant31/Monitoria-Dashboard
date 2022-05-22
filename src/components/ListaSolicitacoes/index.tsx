import { useAuth } from "../../contexts/AuthContext";
import { Solicitacao } from "../../utils/types";
import CardSolicitacao from "../CardSolicitacao";
import { Container } from "./styles";

interface ListaSolicitacoes {
  solicitacoes: Solicitacao[];
}

const ListaSolicitacoes = ({solicitacoes}: ListaSolicitacoes) => {
  const { user } = useAuth();
  return (
    <Container>
      {solicitacoes.map((solicitacao) => {
        if(user?.role === 'Coordenador') {
          if(solicitacao.aprovada === false) 
            return <CardSolicitacao key={solicitacao.id} solicitacao={solicitacao} />
        }else {
          if(solicitacao.matriculaProfessor === user?.matricula)
            return <CardSolicitacao key={solicitacao.id} solicitacao={solicitacao} />
        }
      })}
    </Container>
  )
}

export default ListaSolicitacoes  