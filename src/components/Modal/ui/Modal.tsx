import React, { ReactNode } from 'react';
import '../ui/Modal.css'
import { Portal } from '../../Portal/ui/Portal';

interface ModalProps{
    isOpen:boolean,
    isClosing:()=>void
    children?:ReactNode
}

const Modal = ({isOpen,isClosing,children}:ModalProps) => {
    return(
    <Portal>
    <div className= {isOpen?'modal opened':'modal'}>
        <div className='overlay'>
            <div
                className='content'
            >
             {children}
            </div>
        </div>
    </div>
    </Portal>
    )
};

export default Modal;