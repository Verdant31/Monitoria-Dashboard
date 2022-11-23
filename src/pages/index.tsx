// Components
import Image from 'next/image'
import { useState } from 'react'
import MyButton from '../components/Button'
import MyInput from '../components/Input'
import { useAuth } from '../contexts/AuthContext'
// Styles
import { Container, FormContainer, LogInContainer } from '../styles/Home'

const Home = () => {
  const { logIn } = useAuth()
  const [matricula, setMatricula] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogIn = async () => {
    await logIn(matricula, senha)
  }
  return (
    <Container>
      <LogInContainer>
        <Image src="/logo.png" width={400} height={150} alt="hehe" />
        <FormContainer>
          <MyInput
            onChange={(e) => setMatricula(e.target.value)}
            labelText="Matrícula"
            width="19rem"
            placeholder="Entre com sua matricula"
          />
          <MyInput
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            labelText="Senha"
            width="19rem"
            placeholder="Entre com sua senha"
          />
          <MyButton
            style={{ marginTop: '0.2rem', borderRadius: 5 }}
            width="12rem"
            textColor="#2f6195"
            bgColor="white"
            onClick={() => handleLogIn()}
          >
            Entrar
          </MyButton>
        </FormContainer>
      </LogInContainer>
    </Container>
  )
}

export default Home
