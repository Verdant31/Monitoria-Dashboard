import { AddBox } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import MyInput from "../Input";
import { DoubleFieldsContainer, FormContainer, SubmitButton, FormTitle, InputsContainer, PreRequisitoDesc, PreRequisitosContainer } from "./styles";
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRequisitos } from "../../contexts/RequisitosContext";
import MyButton from "../Button";

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
            <AddBoxIcon fontSize="large" sx={{color: '#f2f2f2', width: '2.7rem', height: '2.7rem', paddingTop: '0.4rem'}} />
          </IconButton>
        </DoubleFieldsContainer>
      </InputsContainer>
      {requisitos}
      <SubmitButton>Cadastrar</SubmitButton>
    </FormContainer>
  )
}
export default AbrirVagaForm;