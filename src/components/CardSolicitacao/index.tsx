import { useSolicitacaoModalContext } from "../../contexts/SolicitacaoModalContext";
import { Solicitacao, SolicitacaoAbertura, SolicitacaoMonitor } from "../../utils/types"
import MyButton from "../Button";
import InfoCard from "../InfoCard";
import { ButtonsContainer, CardContainer } from "./styles";

interface CardSolicitacao {
  solicitacao: SolicitacaoMonitor | SolicitacaoAbertura;
  abertura: boolean | undefined;
}

const CardSolicitacao = ({solicitacao, abertura = false}: CardSolicitacao) => {
  const { openModal } = useSolicitacaoModalContext();
  return (
    <CardContainer>
      {!abertura 
        ? (
          <>
            <InfoCard title="Aluno:" value={(solicitacao as SolicitacaoMonitor).matriculaAluno} />
            <InfoCard title="Disciplina:" value={(solicitacao as SolicitacaoMonitor).disciplinaDesejada} />
            <InfoCard title="Email para contato:" value={(solicitacao as SolicitacaoMonitor).emailAluno} />
          </>
        )
        : (
          <>
            <InfoCard title="Aluno:" value={(solicitacao as SolicitacaoAbertura).matriculaAluno} />
            <InfoCard title="Disciplina:" value={(solicitacao as SolicitacaoAbertura).disciplinaDesejada} />
            <InfoCard title="Recomendação de monitor:" value={(solicitacao as SolicitacaoAbertura).monitorRecomendado} />
            <InfoCard title="Motivo:" value={(solicitacao as SolicitacaoAbertura).motivoSolicitacao} />
          </>
        )
      }
      <ButtonsContainer>
        <MyButton onClick={()=> console.log('hehe')} textColor="#f2f2f2" bgColor="#2f6195" width="10rem">Aprovar</MyButton>
        <MyButton onClick={()=> console.log('hehe')} textColor="#f2f2f2" bgColor="#2f6195" width="10rem">Excluir</MyButton>
      </ButtonsContainer>
    </CardContainer>
  )
}


export default CardSolicitacao