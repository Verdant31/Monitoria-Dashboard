/* eslint-disable no-use-before-define */
import { api } from '../services/axios'
import { User } from '../utils/types'

export class CoordenadorController {
  private static coordenadorController: CoordenadorController

  public static getInstance(): CoordenadorController {
    if (this.coordenadorController == null) {
      this.coordenadorController = new CoordenadorController()
    }
    return this.coordenadorController
  }

  public async getAllSolicitacoes(user: User) {
    let monitores
    await api.get('/coordenador/solicitacoes').then((res) => {
      console.log(res)
      monitores = res.data.solicitacoes
    })

    return { monitores }
  }

  public abrirVaga() {}
}
