/* eslint-disable no-use-before-define */
import { api } from '../services/axios'
import { User } from '../utils/types'

export class ProfessorController {
  private static professorController: ProfessorController

  public static getInstance(): ProfessorController {
    if (this.professorController == null) {
      this.professorController = new ProfessorController()
    }
    return this.professorController
  }

  public abrirVaga() {}

  public async getAllSolicitacoes(user: User) {
    let abertura
    let monitores
    await api
      .post('/professor/solicitacoes', { cpf_professor: user.matricula })
      .then((res) => {
        monitores = res.data.solicitacoes
      })

    await api
      .post('/professor/aberturamonitoria', { cpf_professor: user.matricula })
      .then((res) => {
        abertura = res.data.solicitacoesAbertura
      })
    return { abertura, monitores }
  }

  public async getMonitores(user: User) {
    return await api
      .post(
        '/professor/monitorias',
        { cpf_professor: user.matricula },
        { headers: { Authorization: user.token } },
      )
      .then((res) => {
        return { disciplinas: res.data.disciplinas }
      })
  }
}
