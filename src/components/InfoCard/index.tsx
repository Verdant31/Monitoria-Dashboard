import { InfoContainer } from './styles'

interface InfoCardProps {
  title: string
  value: string
}

const InfoCard = ({ value, title }: InfoCardProps) => {
  return (
    <InfoContainer>
      <p>
        {title}{' '}
        <span style={{ display: 'inline', fontWeight: '400' }}>{value}</span>
      </p>
    </InfoContainer>
  )
}
export default InfoCard
