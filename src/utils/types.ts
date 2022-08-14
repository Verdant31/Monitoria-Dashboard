export type User = {
  matricula: string,
  nome: string,
  role: string 
}

export type SolicitacaoMonitor = {
  id: string;
  matriculaAluno: string;
  disciplinaDesejada: string;
  emailAluno: string;
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
export type SolicitacaoAbertura = {
  id: string;
  matriculaAluno: string;
  disciplinaDesejada: string;
  monitorRecomendado: string;
  motivoSolicitacao: string;
}
export type Monitoria = {
  codDisciplina: string;
  nomeDisciplina: string;
  professorDisciplina: string;
  solicitacoes: Solicitacao[];
}

export type Monitor = {
  id: string;
  email: string;
  nomeAluno: string;
}

export type Disciplina = {
  idDisciplina: string;
  nomeDisciplina: string;
  monitores: Monitor[];
}


export type MonitorCard = {
  idMonitor: string;
  nomeMonitor: string;
  email: string;
}