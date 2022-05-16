//Components
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
        <Logo src={"/logo.svg"} />
        <LoginForm />
      </LogInContainer>
    </Container>
  )
}

export default Home