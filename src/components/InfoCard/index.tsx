import { InfoContainer } from "./styles";

interface InfoCardProps {
  title: string;
  value: string;
}

const InfoCard = ({value, title}: InfoCardProps) => {
  return (
    <InfoContainer>
        <p>{title} <p style={{display: 'inline'}}>{value}</p></p>
    </InfoContainer>
  )
}
export default InfoCard;