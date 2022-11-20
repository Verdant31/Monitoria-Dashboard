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
  const [horario, setHorario] = useState('')
  const [dia, setDia] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const handleAprovarSolicitacao = async () => {
    await SolicitacaoController.getInstance()
      .aprovarSolicitacao(solicitacaoId, professor, horario, dia)
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
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '12px',
          }}
        >
          {professor && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ marginBottom: 20 }}>
                <p style={{ marginBottom: 10 }}>Horario da monitoria</p>
                <input
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  style={{ padding: 8 }}
                  type="text"
                  placeholder="Exemplo: 15:30, 15:00..."
                />
              </div>
              <div style={{ marginBottom: 20 }}>
                <p style={{ marginBottom: 10 }}>Dia da monitoria</p>
                <select
                  style={{ padding: 8, width: 238 }}
                  defaultValue={'Segunda'}
                  onChange={(e) => setDia(e.target.value)}
                >
                  <option value="Segunda">Segunda</option>
                  <option value="Terca">Terça</option>
                  <option value="Quarta">Quarta</option>
                  <option value="Quinta">Quinta</option>
                  <option value="Sexta">Sexta</option>
                </select>
              </div>
            </div>
          )}
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
