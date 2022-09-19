import ListaMonitores from '../../../components/ListaMonitores'
import SearchBar from '../../../components/SearchBar'
import SideBar from '../../../components/SideBar'
import Title from '../../../components/Title'
import { Container, MainContainer } from './styles'

const MeusMonitores = () => {
  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title displayTitle title={'Meus Monitores'} />
        <SearchBar />
        <ListaMonitores />
      </MainContainer>
    </Container>
  )
}

export default MeusMonitores
