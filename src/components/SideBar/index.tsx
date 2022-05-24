import { IconsContainer, LogoutBtnContainer, SideBarContainer, Title } from "./styles";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import LogoutButton from "../LogutButton";
import AddBoxIcon from '@mui/icons-material/AddBox';

interface SideBarProps {
  title: string;
}

const SideBar = ({title}: SideBarProps) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleRedirect = (path: string) => {
    if(path === 'Home') user?.role==="Coordenador" 
      ? router.push('/DashCord') 
      : router.push('/DashProf')
    if(path === 'Alunos') user?.role==="Coordenador" 
      ? router.push('DashCord/AlunosPendentes') 
      : router.push('DashProf/MeusMonitores')
  }

  return (
    <SideBarContainer>
      <IconsContainer>
        <IconButton onClick={() => handleRedirect('Home')}>
          <HomeIcon fontSize="large" sx={{color: '#f2f2f2'}} />  
        </IconButton>
        <IconButton onClick={() => handleRedirect('Alunos')}>
          <LibraryBooksIcon fontSize="large" sx={{color: '#f2f2f2'}} />
        </IconButton>
        {user?.role === "Professor" &&
          <IconButton onClick={() => router.push('DashProf/AbrirVaga')}>
            <AddBoxIcon fontSize="large" sx={{color: '#f2f2f2'}} />
          </IconButton>
        }
      </IconsContainer>
      <Title>{title}</Title>
      <LogoutBtnContainer>
        <LogoutButton />
      </LogoutBtnContainer>
    </SideBarContainer>
  )
}

export default SideBar;