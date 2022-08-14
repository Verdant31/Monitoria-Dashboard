import { api } from "../services/axios";

export async function useProfSolicitacoes() {
  const solicitacoesMonitoria = await api.get('/professor/solicitacoes').then((res) => {
    return res.data.solicitacoes
  })
  const solicitacoesAbertura = await api.get('/professor/aberturamonitoria').then((res) => {
    return res.data.solicitacoesAbertura
  })
  return { abertura: solicitacoesAbertura, monitores: solicitacoesMonitoria };
}