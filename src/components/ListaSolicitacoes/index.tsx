import { Solicitacao } from "../../utils/types";
import CardSolicitacao from "../CardSolicitacao";
import { Container } from "./styles";

interface ListaSolicitacoes {
  solicitacoes: Solicitacao[];
}

const ListaSolicitacoes = ({solicitacoes}: ListaSolicitacoes) => {
  return (
    <Container>
      {solicitacoes.map((solicitacao) => {
        if(solicitacao.aprovada) {
          return <CardSolicitacao key={solicitacao.id} solicitacao={solicitacao} />
        }
      })}
    </Container>
  )
}

export default ListaSolicitacoes  