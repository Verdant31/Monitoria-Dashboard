import Image from 'next/image'
import { TitleContainer } from './styles'

interface TitleProps {
  title: string
  displayTitle: boolean
}

const Title = ({ title, displayTitle }: TitleProps) => {
  return (
    <TitleContainer>
      <Image src="/logoastitle.png" width={400} height={80} alt="hehe" />
      {displayTitle && <h1>{title}</h1>}
    </TitleContainer>
  )
}
export default Title
