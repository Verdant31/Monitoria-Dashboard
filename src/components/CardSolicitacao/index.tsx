import { Solicitacao } from "../../utils/types"
import MyButton from "../Button";
import InfoCard from "../InfoCard";
import { ButtonsContainer, CardContainer } from "./styles";

interface CardSolicitacao {
  solicitacao: Solicitacao;
}

const CardSolicitacao = ({solicitacao}: CardSolicitacao) => {
  return (
    <CardContainer>
      <InfoCard title="Aluno:" value={solicitacao.nomeAluno} />
      <InfoCard title="Disciplina:" value={solicitacao.disciplinaDesejada} />
      <InfoCard title="Email para contato:" value={solicitacao.email} />
      <ButtonsContainer>
        <MyButton onClick={()=> console.log('hehe')} textColor="#f2f2f2" bgColor="#2f6195" width="10rem">Aprovar</MyButton>
        <MyButton onClick={()=> console.log('hehe')} textColor="#f2f2f2" bgColor="#2f6195" width="10rem">Excluir</MyButton>
      </ButtonsContainer>
    </CardContainer>
  )
}


export default CardSolicitacao