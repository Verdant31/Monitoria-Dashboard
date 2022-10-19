import InfoCard from '../InfoCard'
import { CardContainer } from './styles'

interface CardAlunoProps {
  matricula: string
  disciplina: string
}

const CardAluno = ({ matricula, disciplina }: CardAlunoProps) => {
  return (
    <CardContainer>
      <InfoCard title="Matricula:" value={matricula} />
      <InfoCard title="Disciplina:" value={disciplina} />
    </CardContainer>
  )
}
export default CardAluno
