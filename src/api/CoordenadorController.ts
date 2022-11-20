/* eslint-disable no-use-before-define */
import { AlunoPendente } from '../@types'
import { api } from '../services/axios'
import { toast } from 'react-toastify'

export class CoordenadorController {
  private static coordenadorController: CoordenadorController

  public static getInstance(): CoordenadorController {
    if (this.coordenadorController == null) {
      this.coordenadorController = new CoordenadorController()
    }
    return this.coordenadorController
  }

  public async getAllSolicitacoes() {
    let monitores
    await api
      .post('/coordenador/solicitacoes')
      .then((res) => {
        console.log(res)
        monitores = res.data.solicitacoes
      })
      .catch((err) => console.log(err))

    return { monitores }
  }

  public async getSolicitacoesPendentes(): Promise<AlunoPendente[]> {
    let alunosPendentes: AlunoPendente[] = []
    await api.get('/coordenador/solicitacoes/pendentes').then((res) => {
      alunosPendentes = res.data.solicitacoes
    })

    return alunosPendentes
  }

  public async aprovarSolicitacao(solicitacaoId: string) {
    await api
      .put('/coordenador/solicitacoes/aprovar', {
        solicitacao_id: solicitacaoId,
      })
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err))
  }
}
