export interface ModalTypes {
  children: React.ReactNode
  closeModal: () => void
  show: boolean
  bgColor?: string
  width: string
  animation?: boolean
  type?: string
  padding?: boolean
}
