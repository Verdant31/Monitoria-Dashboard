import { Container, MainContainer } from "./styles"
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import ListaSolicitacoes from "../../components/ListaSolicitacoes";
import { useEffect, useState } from "react";
import { SolicitacaoMonitor, SolicitacaoAbertura } from "../../utils/types";
import { useProfSolicitacoes } from "../../hooks/useProfSolicitacoes";

const DashProf = () => {
  const [ solicitacoesMonitores, setSolicitacoesMonitores] = useState<SolicitacaoMonitor[]>();
  const [ solicitacoesAbertura, setSolicitacoesAbertura] = useState<SolicitacaoAbertura[]>();

  useEffect(() => {
    const GetSolicitacoes = async () => {
      const { abertura, monitores } = await useProfSolicitacoes();
      setSolicitacoesMonitores(monitores);
      setSolicitacoesAbertura(abertura);
    }
    GetSolicitacoes();
  },[])

  return (
    <Container>
      <SideBar/>
      <MainContainer>
        <Title displayTitle={false} title={"Solicitações de Monitoria"} />
        {solicitacoesMonitores && (
          <>
            <ListaSolicitacoes title="Solicitações de Monitores" solicitacoes={solicitacoesMonitores}/>
          </>
        )}
        {solicitacoesAbertura && (
          <ListaSolicitacoes abertura title="Abertura de Monitoria" solicitacoes={solicitacoesAbertura}/>
        )}
      </MainContainer>
    </Container>
  )
}
export default DashProf