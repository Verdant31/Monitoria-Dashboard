export type AlunoPendente = {
  id: string
  matriculaAluno: string
  disciplinaDesejada: string
  emailAluno: string
}

export type AbrirVagaMonitoria = {
  // cpf_professor: string
  codigo_disciplina: string
  nome_disciplina: string
  pre_requisitos: string[]
}
