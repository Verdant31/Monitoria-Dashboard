import AbrirVagaForm from '../../../components/AbrirVagaForm'
import SideBar from '../../../components/SideBar'
import Title from '../../../components/Title'
import { MainContainer, Container } from '../../../styles/AbrirVaga'

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
