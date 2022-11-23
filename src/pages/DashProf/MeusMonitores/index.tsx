import ListaMonitores from '../../../components/ListaMonitores'
import SearchBar from '../../../components/SearchBar'
import SideBar from '../../../components/SideBar'
import Title from '../../../components/Title'
import { Container, MainContainer } from '../../../styles/MeusMonitores'
import { useEffect, useState } from 'react'
import { Disciplina } from '../../../utils/types'
import { useAuth } from '../../../contexts/AuthContext'
import { ProfessorController } from '../../../api/ProfessorController'

const MeusMonitores = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>()
  const [filter, setFilter] = useState('')

  const { user } = useAuth()

  const updateFilter = (value: string) => {
    setFilter(value)
  }

  const filteredDisciplinas = disciplinas?.filter((disciplina) =>
    disciplina.nomeDisciplina.includes(filter),
  )

  useEffect(() => {
    async function getMonitores() {
      if (user) {
        await ProfessorController.getInstance()
          .getMonitores()
          .then((res) => {
            setDisciplinas(res.disciplinas)
          })
      }
    }
    getMonitores()
  }, [user])

  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title displayTitle title={'Meus Monitores'} />
        <SearchBar setFilter={updateFilter} />
        <ListaMonitores disciplinas={filteredDisciplinas || disciplinas} />
      </MainContainer>
    </Container>
  )
}

export default MeusMonitores
