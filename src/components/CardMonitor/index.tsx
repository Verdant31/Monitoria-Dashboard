import { MonitorCard } from "../../utils/types";
import { MonitorCardContainer } from "./styles";

interface CardMonitorProps {
  monitor: MonitorCard;
}

const CardMonitor = ({monitor}: CardMonitorProps) => {
  return (
    <MonitorCardContainer>
      <p>Nome: {monitor.nomeMonitor}</p>
      <p>Email: {monitor.email}</p>
    </MonitorCardContainer>
  )
}
export default CardMonitor;