import { IconButton } from '@mui/material'
import MyButton from '../Button'
import { ButtonsContainer, Container, Input } from './styles'
import CloseIcon from '@mui/icons-material/Close'
import { useSolicitacaoModalContext } from '../../contexts/SolicitacaoModalContext'

const ModalSolicitacao = () => {
  const { closeModal } = useSolicitacaoModalContext()
  return (
    <Container>
      <h1>Justificativa</h1>
      <div>
        <Input />
        <ButtonsContainer>
          <MyButton
            onClick={() => console.log('hehe')}
            width="100%"
            bgColor="#418dde"
          >
            Enviar
          </MyButton>
        </ButtonsContainer>
      </div>
      <IconButton
        onClick={closeModal}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        <CloseIcon sx={{ color: 'black' }} />
      </IconButton>
    </Container>
  )
}

export default ModalSolicitacao
