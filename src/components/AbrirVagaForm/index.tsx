import { IconButton } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import MyInput from '../Input'
import {
  DoubleFieldsContainer,
  FormContainer,
  SubmitButton,
  FormTitle,
  InputsContainer,
  ButtonContainer,
  PreRequisitosContainer,
  PreRequisitoDesc,
  PreRequisitoContainer,
} from './styles'
import AddBoxIcon from '@mui/icons-material/AddBox'
import DeleteIcon from '@mui/icons-material/Delete'
import { MonitoriaController } from '../../api/MonitoriaController'
import { useAuth } from '../../contexts/AuthContext'

const AbrirVagaForm = () => {
  const [requisitos, setRequisitos] = useState<string[]>([])
  const [requisito, setRequisito] = useState<string>('')
  const [codDisciplina, setCodDisciplina] = useState<string>('')
  const [nomeDisciplina, setNomeDisciplina] = useState<string>('')

  const { user } = useAuth()

  const handleDeleteRequisito = (requisito: string) => {
    setRequisitos(requisitos.filter((i) => i !== requisito))
  }

  const handleAbrirVagaMonitoria = async (e: FormEvent) => {
    e.preventDefault()
    if (user) {
      const solicitarAberturaForm = {
        cpf_professor: user?.matricula,
        codigo_disciplina: codDisciplina,
        nome_disciplina: nomeDisciplina,
        pre_requisitos: requisitos,
      }
      await MonitoriaController.getInstance().abrirVaga(
        solicitarAberturaForm,
        user,
      )
    }
  }

  return (
    <FormContainer onSubmit={handleAbrirVagaMonitoria}>
      <FormTitle>Cadastro de Monitoria</FormTitle>
      <InputsContainer>
        <DoubleFieldsContainer gap="6rem">
          <MyInput
            onChange={(e) => setCodDisciplina(e.target.value)}
            labelText="Codígo da Disciplina"
            width="15rem"
          />
          <MyInput
            onChange={(e) => setNomeDisciplina(e.target.value)}
            labelText="Nome da Disciplina"
            width="15rem"
          />
        </DoubleFieldsContainer>
        <DoubleFieldsContainer gap="1rem">
          <MyInput
            onChange={(e) => setRequisito(e.target.value)}
            labelText="Pré Requisitos"
            width="31.3rem"
          />
          <IconButton
            onClick={() =>
              setRequisitos((oldState) => [...oldState, requisito])
            }
          >
            <AddBoxIcon
              fontSize="large"
              sx={{
                color: '#f2f2f2',
                width: '2.7rem',
                height: '2.7rem',
                paddingTop: '1.2rem',
              }}
            />
          </IconButton>
        </DoubleFieldsContainer>
      </InputsContainer>
      <PreRequisitosContainer>
        {requisitos.map((requisito) => (
          <PreRequisitoContainer key={requisito}>
            <PreRequisitoDesc>*{requisito}</PreRequisitoDesc>
            <IconButton onClick={() => handleDeleteRequisito(requisito)}>
              <DeleteIcon sx={{ color: '#f2f2f2' }} fontSize="large" />
            </IconButton>
          </PreRequisitoContainer>
        ))}
      </PreRequisitosContainer>
      <ButtonContainer>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  )
}
export default AbrirVagaForm
