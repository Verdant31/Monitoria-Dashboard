import { IconsContainer, SideBarContainer } from './styles'
import HomeIcon from '@mui/icons-material/Home'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout'
import AddBoxIcon from '@mui/icons-material/AddBox'

const SideBar = () => {
  const { user, logOut } = useAuth()
  const router = useRouter()

  return (
    <SideBarContainer>
      <IconsContainer>
        <IconButton
          onClick={() =>
            user?.role === 'Coordenador'
              ? router.push('/DashCord')
              : router.push('/DashProf')
          }
        >
          <HomeIcon fontSize="large" sx={{ color: '#f2f2f2' }} />
        </IconButton>
        <IconButton
          onClick={() =>
            user?.role === 'Coordenador'
              ? router.push('/DashCord/AlunosPendentes')
              : router.push('/DashProf/MeusMonitores')
          }
        >
          <LibraryBooksIcon fontSize="large" sx={{ color: '#f2f2f2' }} />
        </IconButton>
        {user?.role === 'Professor' && (
          <IconButton onClick={() => router.push('/DashProf/AbrirVaga')}>
            <AddBoxIcon fontSize="large" sx={{ color: '#f2f2f2' }} />
          </IconButton>
        )}
        <IconButton onClick={() => logOut()}>
          <LogoutIcon fontSize="large" sx={{ color: '#f2f2f2' }} />
        </IconButton>
      </IconsContainer>
    </SideBarContainer>
  )
}

export default SideBar
