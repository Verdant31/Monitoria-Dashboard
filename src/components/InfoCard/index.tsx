import { InfoContainer } from "./styles";

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard = ({value, title}: InfoCardProps) => {
  return (
    <InfoContainer>
        <p>{title}</p>
        <p>{value}</p>
    </InfoContainer>
  )
}
export default InfoCard;