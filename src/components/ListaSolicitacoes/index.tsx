import { SolicitacaoAbertura, SolicitacaoMonitor } from '../../utils/types'
import CardSolicitacao from '../CardSolicitacao'
import { GridContainer, Container, GridTitle } from './styles'

interface ListaSolicitacoesProps {
  solicitacoes: SolicitacaoMonitor[] | SolicitacaoAbertura[] | undefined
  title?: string
  abertura?: boolean
  gridHeight?: string
  updateLista: (solicitacaoId: string) => void
  professor: boolean
}

const ListaSolicitacoes = ({
  solicitacoes,
  title,
  abertura,
  gridHeight,
  updateLista,
  professor,
}: ListaSolicitacoesProps) => {
  return (
    <Container>
      {title && <GridTitle>{title}</GridTitle>}
      <GridContainer height={gridHeight}>
        {solicitacoes?.map((solicitacao, index) => {
          return (
            <CardSolicitacao
              professor={professor}
              updateLista={updateLista}
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
