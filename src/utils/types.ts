export type User = {
  matricula: string,
  nome: string,
  senha: string,
  role: string 
  solicitacoes?: Solicitacao[]
}
export type Solicitacao = {
  id: string;
  matriculaProfessor:string;
  matriculaAluno: string;
  nomeAluno: string;
  disciplinaDesejada: string;
  mediaMateria?: string;
  email: string;
  aprovada: boolean;
}
export type Monitoria = {
  codDisciplina: string;
  nomeDisciplina: string;
  professorDisciplina: string;
  solicitacoes: Solicitacao[];
}
export type MonitorCard = {
  idMonitor: string;
  nomeMonitor: string;
  email: string;
}