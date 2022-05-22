import { OptionsContainer, SideBarContainer } from "./styles";

import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { Logout } from "@mui/icons-material";

const SideBar = () => {
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
      <OptionsContainer>
        <IconButton onClick={() => handleRedirect('Home')}>
          <HomeIcon fontSize="large" sx={{color: '#f2f2f2'}} />  
        </IconButton>
        <IconButton onClick={() => handleRedirect('Alunos')}>
          <LibraryBooksIcon fontSize="large" sx={{color: '#f2f2f2'}} />
        </IconButton>
      </OptionsContainer>
    </SideBarContainer>
  )
}

export default SideBar;