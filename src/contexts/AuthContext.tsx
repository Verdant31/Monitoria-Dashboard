import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../utils/types";
import data from '../../data.json';

type AuthContextType = {
  user: User | undefined;
  logIn: (matricula: string, senha: string) => string;
}

type AuthContextProviderPros = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

const AuthContextProvider = (props: AuthContextProviderPros) => {
  const [ user, setUser ] = useState<User>();

  const logIn = (matricula: string, senha: string) => {
    let role = '';
    data.map((user) => {
      if(matricula === user.matricula && senha === user.senha) {
        setUser(user);
        role = user.role;
      }
    })
    return role;
  }

  return (
    <AuthContext.Provider value={{user, logIn}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
}