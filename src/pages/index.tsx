//Components
import { useRouter } from "next/router";
import MyButton from "../components/Button";
//Styles
import { LogInContainer,  ButtonsContainer, Logo } from "./home";

const Home = () => {
  const router = useRouter();
  return (
    <LogInContainer>
      <Logo src={"/uplogo.png"} />
      <ButtonsContainer>
        <MyButton onClick={() => router.push('DashCord')}>Professor</MyButton>
        <MyButton onClick={() => router.push('DashProf')}>Coordenador</MyButton>
      </ButtonsContainer>
    </LogInContainer>
  )
}

export default Home