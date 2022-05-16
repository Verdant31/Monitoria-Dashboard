//Components
import Image from "next/image";
import { useRouter } from "next/router";
import MyButton from "../components/Button";
import LoginForm from "../components/LoginForm";
//Styles
import { Container, LogInContainer, Logo } from "./home";

const Home = () => {
  const router = useRouter();
  return (
    <Container>
      <LogInContainer>
        <Image src="/logo.svg" width={400} height={150} alt="hehe" />
        <LoginForm />
      </LogInContainer>
    </Container>
  )
}

export default Home