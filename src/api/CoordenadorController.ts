/* eslint-disable no-use-before-define */
import { AlunoPendente } from '../@types'
import { api } from '../services/axios'

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
    await api.get('/coordenador/solicitacoes').then((res) => {
      monitores = res.data.solicitacoes
    })

    return { monitores }
  }

  public async getSolicitacoesPendentes(): Promise<AlunoPendente[]> {
    let alunosPendentes: AlunoPendente[] = []
    await api.get('/coordenador/solicitacoes/pendentes').then((res) => {
      alunosPendentes = res.data.solicitacoes
    })

    return alunosPendentes
  }

  public abrirVaga() {}
}
