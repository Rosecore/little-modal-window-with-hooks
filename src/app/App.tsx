import { useCallback, useState } from 'react';
import './App.css';
import { useAppSelector } from '../hooks';
import { ModalWindow } from '../widgets/ModalWindow';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const state = useAppSelector(state=>state.completingReducer)

  const showModal = useCallback(()=>{
    if(state.isCompleted){
      alert('Действие выполнено')
      
    }
    else setIsOpen(true)
  },[state])
  const hideModal = useCallback(()=>{
    setIsOpen(false)
  },[])
  return (<>
   <button onClick={showModal}>Выполнить действие</button>
   {isOpen && <ModalWindow isOpen={isOpen} isClosing={hideModal}/>}
   </>
  );
}

export default App;
