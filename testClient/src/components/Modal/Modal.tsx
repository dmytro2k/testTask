import React, { type ComponentPropsWithoutRef } from 'react'
import Button from '../CustomButton/CustomButton'

type ModalComponentProps = ComponentPropsWithoutRef<'div'> & {
  isOpen: boolean
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, className = '', children, ...rest }) => {
  if (!isOpen) return null

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  )
}

const Modal = Object.assign(ModalComponent, {
  Button
});

export default Modal