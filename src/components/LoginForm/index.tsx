import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import MyButton from "../Button";
import MyInput from "../Input";
import { FormContainer } from "./styles";

const LoginForm = () => {
  const { logIn } = useAuth();
  const router = useRouter();
  const [ matricula, setMatricula ] = useState('');
  const [ senha, setSenha ] = useState('');

  const updateMatricula = (matricula: string) => setMatricula(matricula);
  const updateSenha = (senha: string) => setSenha(senha);

  const handleLogIn = () => {
    const role = logIn(matricula, senha);
    role === 'Coordenador' ? router.push('DashCord') : router.push('DashProf')
  }

  return (
    <FormContainer>
      <MyInput updateValue={updateMatricula} labelText="Matrícula" width="100%" placeholder="Entre com sua matricula" />
      <MyInput updateValue={updateSenha} labelText="Senha" width="100%" placeholder="Entre com sua senha" />
      <MyButton onClick={() => handleLogIn()}>Entrar</MyButton>
    </FormContainer>
  )
}
export default LoginForm;