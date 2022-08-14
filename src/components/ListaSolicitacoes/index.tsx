import { useAuth } from "../../contexts/AuthContext";
import { Solicitacao, SolicitacaoAbertura, SolicitacaoMonitor } from "../../utils/types";
import CardSolicitacao from "../CardSolicitacao";
import { GridContainer, Container, GridTitle } from "./styles";

interface ListaSolicitacoes {
  solicitacoes: SolicitacaoMonitor[] | SolicitacaoAbertura[];
  title?: string;
  abertura?: boolean;
}

const ListaSolicitacoes = ({solicitacoes, title, abertura}: ListaSolicitacoes) => {
  return (
    <Container>
      {title && <GridTitle>{title}</GridTitle> }
      <GridContainer>
        {solicitacoes.map((solicitacao) => {
          return <CardSolicitacao key={solicitacao.id} abertura={abertura} solicitacao={solicitacao} />
        })}
      </GridContainer>
    </Container>
  )
}

export default ListaSolicitacoes  