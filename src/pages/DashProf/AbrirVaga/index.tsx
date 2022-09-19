import AbrirVagaForm from '../../../components/AbrirVagaForm'
import SideBar from '../../../components/SideBar'
import Title from '../../../components/Title'
import { MainContainer } from '../styles'
import { Container } from './styles'

const AbrirVaga = () => {
  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title displayTitle title={'Abertura do Edital de Monitoria'} />
        <AbrirVagaForm />
      </MainContainer>
    </Container>
  )
}
export default AbrirVaga
