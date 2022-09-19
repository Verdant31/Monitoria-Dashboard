/* eslint-disable no-use-before-define */
import { api } from '../services/axios'
import { User } from '../utils/types'
import { toast } from 'react-toastify'
type AbrirVagaMonitoria = {
  cpf_professor: string
  codigo_disciplina: string
  nome_disciplina: string
  pre_requisitos: string[]
}

export class MonitoriaController {
  private static monitoriaController: MonitoriaController

  public static getInstance(): MonitoriaController {
    if (this.monitoriaController == null) {
      this.monitoriaController = new MonitoriaController()
    }
    return this.monitoriaController
  }

  public async abrirVaga(vaga: AbrirVagaMonitoria, user: User) {
    await api
      .post('/professor/solicitacoes', { vaga })
      .then((res) => {
        toast.success('Sua vaga foi aberta com sucesso.')
      })
      .catch((err) => toast.error(err))
  }
}
