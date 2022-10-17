import { SolicitacaoAbertura, SolicitacaoMonitor } from '../../utils/types'
import CardSolicitacao from '../CardSolicitacao'
import { GridContainer, Container, GridTitle } from './styles'

interface ListaSolicitacoesProps {
  solicitacoes: SolicitacaoMonitor[] | SolicitacaoAbertura[] | undefined
  title?: string
  abertura?: boolean
}

const ListaSolicitacoes = ({
  solicitacoes,
  title,
  abertura,
}: ListaSolicitacoesProps) => {
  return (
    <Container>
      {title && <GridTitle>{title}</GridTitle>}
      <GridContainer>
        {solicitacoes?.map((solicitacao, index) => {
          return (
            <CardSolicitacao
              key={index}
              abertura={abertura}
              solicitacao={solicitacao}
            />
          )
        })}
      </GridContainer>
    </Container>
  )
}

export default ListaSolicitacoes
