import React, { ReactNode, useState } from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import {
  Dialog,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  IconButton,
  StyledContent,
  StyledOverlay,
} from '../ModalSolicitacao/styles'
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

interface ConfirmacaoModalProps {
  children?: ReactNode
  solicitacaoId: string
  updateLista: (solicitacaoId: string) => void
  trigger?: ReactNode
  professor: boolean
}
export const ConfirmacaoModal = ({
  solicitacaoId,
  updateLista,
  trigger,
  professor,
}: ConfirmacaoModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleAprovarSolicitacao = async () => {
    await SolicitacaoController.getInstance()
      .aprovarSolicitacao(solicitacaoId, professor)
      .then(() => {
        updateLista(solicitacaoId)
      })
  }
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirma a aprovação?</DialogTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '12px',
          }}
        >
          <MyButton
            onClick={handleAprovarSolicitacao}
            textColor="#f2f2f2"
            bgColor="#2f6195"
            width="100%"
          >
            Confirmar
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
