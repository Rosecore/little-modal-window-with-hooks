import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import '../ui/ModalWindow'
import { Modal } from '../../../components/Modal';
import { Form } from '../../../components/Form';
import { useAppDispatch } from '../../../hooks';
import { AuthActionCreators } from '../../../store/reducers/action-creator';

interface ModalWindowProps{
    isOpen:boolean,
    isClosing:()=>void
}


const ModalWindow = ({isOpen, isClosing}:ModalWindowProps) => {
    const [time, setTime] = useState<number>(5)
    const [enabled, setEnabled] = useState(false)
    const timer  = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const dispatch = useAppDispatch()
    const handleAprooveButton = () =>{
        alert("Действие выполнено")
        isClosing()
        dispatch(AuthActionCreators.TaskCompleting(true))
    }
    useEffect(()=>{
        timer.current = setInterval(() => setTime(time-1), 1000);
        if (time === 0){
            setEnabled(true)
            clearInterval(timer.current)
        }
        return () => clearInterval(timer.current);
    },[time])
    return (
        <Modal isOpen={isOpen} isClosing={isClosing} >
            <Form onClose={isClosing} handleAprooveBtn = {handleAprooveButton} time = {time} enabled = {enabled}/>
        </Modal>
    );
};

export default ModalWindow;