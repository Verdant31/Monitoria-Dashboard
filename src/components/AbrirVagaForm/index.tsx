import { IconButton } from "@mui/material";
import React, { useState } from "react";
import MyInput from "../Input";
import { DoubleFieldsContainer, FormContainer, SubmitButton, FormTitle, InputsContainer, ButtonContainer } from "./styles";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRequisitos } from "../../contexts/RequisitosContext";

const AbrirVagaForm = () => {
  const {handleAddRequisito, requisitos } = useRequisitos();
  const [ codDisciplina, setCodDisciplina ] = useState<string>()
  const [ nomeDisciplina, setNomeDisciplina ] = useState<string>()
  const [ preRequisito, setPreRequisito ] = useState<string>()

  const updateCodDisciplina = (value: string) => setCodDisciplina(value);
  const updatePreRequisito = (value: string) => setPreRequisito(value);
  const updateNomeDisciplina = (value: string) => setNomeDisciplina(value);
  return (
    <FormContainer>
      <FormTitle>Cadastro de Monitoria</FormTitle>
      <InputsContainer>
        <DoubleFieldsContainer gap="6rem">
          <MyInput updateValue={updateCodDisciplina} labelText="Codígo da Disciplina" width="15rem" />
          <MyInput updateValue={updateNomeDisciplina} labelText="Nome da Disciplina" width="15rem" />
        </DoubleFieldsContainer>
        <DoubleFieldsContainer gap="1rem">
          <MyInput updateValue={updatePreRequisito} labelText="Pré Requisitos" width="31.3rem" />
          <IconButton onClick={() => handleAddRequisito(preRequisito)}>
            <AddBoxIcon fontSize="large" sx={{color: '#f2f2f2', width: '2.7rem', height: '2.7rem', paddingTop: '1.2rem'}} />
          </IconButton>
        </DoubleFieldsContainer>
      </InputsContainer>
      {requisitos}
      <ButtonContainer>
        <SubmitButton>Cadastrar</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  )
}
export default AbrirVagaForm;