import { api } from "../services/axios";

export async function useProfMonitores() {
  const disciplinas = await api.get('/professor/monitorias').then((res) => {
    return res.data.disciplinas;
  })
  return { disciplinas };
}