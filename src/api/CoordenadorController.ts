/* eslint-disable no-use-before-define */
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

  public abrirVaga() {}
}
