//Components
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import MyButton from "../components/Button";
import MyInput from "../components/Input";
import { useAuth } from "../contexts/AuthContext";
//Styles
import { Container, FormContainer, LogInContainer, Logo } from "./home";

const Home = () => {
  const { logIn } = useAuth();
  const router = useRouter();
  const [ matricula, setMatricula ] = useState('');
  const [ senha, setSenha ] = useState('');

  const updateMatricula = (matricula: string) => setMatricula(matricula);
  const updateSenha = (senha: string) => setSenha(senha);

  const handleLogIn = async () => {
    const role = await logIn(matricula, senha);
    role === 'Coordenador' ? router.push('DashCord') : router.push('DashProf')
  }
  return (
    <Container>
      <LogInContainer>
        <Image src="/logo.png" width={400} height={150} alt="hehe" />
        <FormContainer>
          <MyInput updateValue={updateMatricula} labelText="Matrícula" width="19rem" placeholder="Entre com sua matricula" />
          <MyInput type="password" updateValue={updateSenha} labelText="Senha" width="19rem" placeholder="Entre com sua senha" />
          <MyButton style={{marginTop: '0.2rem', borderRadius: 5}} width="12rem" textColor="#2f6195" bgColor="white"  onClick={() => handleLogIn()}>Entrar</MyButton>
        </FormContainer>
      </LogInContainer>
    </Container>
  )
}

export default Home