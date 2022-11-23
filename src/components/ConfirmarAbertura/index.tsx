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

interface ConfirmarAberturaProps {
  children?: ReactNode
  solicitacaoId: string
  updateLista: (solicitacaoId: string) => void
  trigger?: ReactNode
  professor: boolean
}
export const ConfirmarAbertura = ({
  solicitacaoId,
  updateLista,
  trigger,
}: ConfirmarAberturaProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleAprovarSolicitacao = async () => {
    updateLista(solicitacaoId)
  }
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirma a aprovação?</DialogTitle>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
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
