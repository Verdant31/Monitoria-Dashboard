import { LogoutBtn } from "./styles";
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

const LogoutButton = () => {
  const { logOut } = useAuth();
  return (
      <IconButton onClick={() => logOut()}>
        <LogoutIcon fontSize="large" sx={{color: '#f2f2f2'}}/>
      </IconButton>
  )
}

export default LogoutButton;