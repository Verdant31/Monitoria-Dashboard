export type User = {
  matricula: string,
  nome: string,
  senha: string,
  role: string 
  solicitacoes?: Solicitacao[]
}
export type Solicitacao = {
  id: string;
  matriculaAluno: string;
  nomeAluno: string;
  disciplinaDesejada: string;
  mediaMateria: string;
  email: string;
  aprovada: boolean;
}