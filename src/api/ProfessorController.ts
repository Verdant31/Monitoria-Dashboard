/* eslint-disable no-use-before-define */
import { toast } from 'react-toastify'
import { AbrirVagaMonitoria } from '../@types'
import { api } from '../services/axios'
import { SolicitacaoAbertura, SolicitacaoMonitor } from '../utils/types'
export class ProfessorController {
  private static professorController: ProfessorController

  public static getInstance(): ProfessorController {
    if (this.professorController == null) {
      this.professorController = new ProfessorController()
    }
    return this.professorController
  }

  public async getAllSolicitacoes() {
    let abertura: SolicitacaoAbertura[]
    let monitores: SolicitacaoMonitor[]
    return Promise.all([
      await api.post('/professor/solicitacoes').then((res) => {
        monitores = res.data.solicitacoes
      }),
      await api.post('/professor/aberturamonitoria').then((res) => {
        abertura = res.data.solicitacoesAbertura
      }),
    ]).then(() => {
      return { abertura, monitores }
    })
  }

  public async getMonitores() {
    return await api.post('/professor/monitorias').then((res) => {
      return { disciplinas: res.data.disciplinas }
    })
  }

  public async abrirVaga(vaga: AbrirVagaMonitoria) {
    await api
      .post('/professor/abrirmonitoria', { vaga })
      .then((res) => {
        toast.success('Sua vaga foi aberta com sucesso.')
      })
      .catch((err) => toast.error(err))
  }

  public async removerMonitor(idMonitor: string) {
    await api
      .post('/professor/excluimonitor', { id_monitor: idMonitor })
      .then((res) => {
        toast.success('Monitor removido com sucesso..')
      })
      .catch((err) => toast.error(err))
  }

  public async aprovarSolicitacao(solicitacaoId: string) {
    await api
      .put('/professor/solicitacoes/aprovar', {
        solicitacao_id: solicitacaoId,
      })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err))
  }
}
