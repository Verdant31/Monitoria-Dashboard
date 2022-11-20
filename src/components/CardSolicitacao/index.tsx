import { SolicitacaoAbertura, SolicitacaoMonitor } from '../../utils/types'
import MyButton from '../Button'
import { ConfirmacaoModal } from '../ConfirmacaoModal'
import InfoCard from '../InfoCard'
import { SolicitacaoModal } from '../ModalSolicitacao'
import { ButtonsContainer, CardContainer, InfosContainer } from './styles'

interface CardSolicitacaoProps {
  solicitacao: SolicitacaoMonitor | SolicitacaoAbertura
  abertura: boolean | undefined
  updateLista: (solicitacaoId: string) => void
  professor: boolean
}

const CardSolicitacao = ({
  solicitacao,
  abertura = false,
  updateLista,
  professor,
}: CardSolicitacaoProps) => {
  return (
    <CardContainer>
      {!abertura ? (
        <InfosContainer>
          <InfoCard
            title="Aluno:"
            value={(solicitacao as SolicitacaoMonitor).matriculaAluno}
          />
          <InfoCard
            title="Disciplina:"
            value={(solicitacao as SolicitacaoMonitor).disciplinaDesejada}
          />
          <InfoCard
            title="Email para contato:"
            value={(solicitacao as SolicitacaoMonitor).emailAluno}
          />
        </InfosContainer>
      ) : (
        <InfosContainer>
          <InfoCard
            title="Aluno:"
            value={(solicitacao as SolicitacaoAbertura).matriculaAluno}
          />
          <InfoCard
            title="Disciplina:"
            value={(solicitacao as SolicitacaoAbertura).disciplinaDesejada}
          />
          <InfoCard
            title="Motivo:"
            value={(solicitacao as SolicitacaoAbertura).motivoSolicitacao}
          />
          <InfoCard
            title="Recomendação de monitor:"
            value={(solicitacao as SolicitacaoAbertura).monitorRecomendado}
          />
        </InfosContainer>
      )}

      <ButtonsContainer>
        <ConfirmacaoModal
          professor={professor}
          updateLista={updateLista}
          solicitacaoId={solicitacao.id}
          trigger={
            <MyButton textColor="#f2f2f2" bgColor="#2f6195" width="10rem">
              Aprovar
            </MyButton>
          }
        />
        <SolicitacaoModal
          updateLista={updateLista}
          solicitacaoId={solicitacao.id}
          trigger={
            <MyButton textColor="#f2f2f2" bgColor="#2f6195" width="10rem">
              Excluir
            </MyButton>
          }
        />
      </ButtonsContainer>
    </CardContainer>
  )
}

export default CardSolicitacao
