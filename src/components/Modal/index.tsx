import React, { FC, useEffect, useRef } from 'react'
import { ModalBackground, Modal, ModalTextContent, ModalClose, Scrollable } from './style'
import { AiOutlineClose } from 'react-icons/ai'

import { ModalTypes } from './types'
const CustomModal: FC<ModalTypes> = ({
  children,
  closeModal,
  show,
  bgColor,
  width,
  animation = true,
  padding,
  type = 'normal',
}) => {
  const ref = useRef(null)
  const addEscListener = (e: any) => {
    if (e.keyCode === 27) {
      closeModal()
      e.stopPropagation()
    }
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === ref.current) {
      closeModal()
    }
  }

  useEffect(() => {
    if (type !== 'plan') {
      window.addEventListener('keydown', addEscListener)
      return () => {
        window.removeEventListener('keydown', addEscListener)
      }
    }
  }, [type])

  return (
    <ModalBackground show={show} animation={animation} ref={ref} onClick={handleClose}>
      <Modal show={show} bgColor={bgColor} width={width} animation={animation} padding={padding}>
        <ModalClose onClick={closeModal}>
          <AiOutlineClose />
        </ModalClose>

        <ModalTextContent>
          <Scrollable>{children}</Scrollable>
        </ModalTextContent>
      </Modal>
    </ModalBackground>
  )
}

export default CustomModal
