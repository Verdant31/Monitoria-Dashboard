import InfoCard from "../InfoCard";
import { CardContainer } from "./styles";

const CardAluno = () => {
  return (
    <CardContainer>
      <InfoCard title="Aluno:" value="Rafale Andreola" />
      <InfoCard title="Disciplina:" value="Sistemas Embarcados" />
    </CardContainer>
  )
}
export default CardAluno;