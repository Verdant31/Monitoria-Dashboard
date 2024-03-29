import React, { ReactNode, useRef, useState } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  IconButton,
  Input,
  StyledContent,
  StyledOverlay,
} from './styles'
import MyButton from '../Button'
import { SolicitacaoController } from '../../api/SolicitacaoController'

interface DialogContentProps {
  children: ReactNode
}

function DialogContent({ children, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  )
}

interface SolicitacaoModalProps {
  children?: ReactNode
  solicitacaoId: string
  updateLista: (solicitacaoId: string) => void
  trigger?: ReactNode
}
export const SolicitacaoModal = ({
  solicitacaoId,
  updateLista,
  trigger,
}: SolicitacaoModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const justificativaInput = useRef<HTMLTextAreaElement>(null)

  const handleRecusarSolicitacao = async () => {
    if (justificativaInput.current && justificativaInput.current.value) {
      await SolicitacaoController.getInstance()
        .recusarSolicitacao(solicitacaoId, justificativaInput.current.value)
        .then(() => {
          updateLista(solicitacaoId)
          setIsOpen(!isOpen)
        })
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Justificar exclusão</DialogTitle>
        <DialogDescription>
          Insira uma justificativa de até 300 caracteres no campo abaixo.
        </DialogDescription>
        <Input ref={justificativaInput} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '12px',
          }}
        >
          <MyButton
            onClick={handleRecusarSolicitacao}
            textColor="#f2f2f2"
            bgColor="#2f6195"
            width="100%"
          >
            Enviar
          </MyButton>
        </div>
        <DialogClose asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
