/* eslint-disable no-use-before-define */
import { toast } from 'react-toastify'
import { api } from '../services/axios'

export class SolicitacaoController {
  private static solicitacaoController: SolicitacaoController

  public static getInstance(): SolicitacaoController {
    if (this.solicitacaoController == null) {
      this.solicitacaoController = new SolicitacaoController()
    }
    return this.solicitacaoController
  }

  public async recusarSolicitacao(solicitacaoId: string, motivo: string) {
    await api
      .put('/professor/solicitacoes/reprovar', {
        solicitacao_id: solicitacaoId,
        motivo,
      })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err))
  }

  public async aprovarSolicitacao(solicitacaoId: string, professor: boolean) {
    await api
      .put(`/${professor ? 'professor' : 'coordenador'}/solicitacoes/aprovar`, {
        solicitacao_id: solicitacaoId,
      })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err))
  }
}
