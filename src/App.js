import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ActionButtons from './components/ActionButtons/ActionButtons';
import './App.css';
import { useState } from 'react';
import { modalData } from './dataBase';

function App() {
  const [modal, setModal] = useState({});

  const handleToggleFirstModal = () => setModal(modalData.firstModal);

  const handleToggleSecondModal = () => setModal(modalData.secondModal);

  const handleCloseModal = () => setModal({...modal, closeButton: false});

  return (
    <div className="App">
      <div className='main__btns'>
        <Button
            backgroundColor="#5d2fb0"
            text="Open first modal"
            onClick={handleToggleFirstModal}
        />
        <Button
            backgroundColor="#5d2fb0"
            text="Open second modal"
            onClick={handleToggleSecondModal}
        />
      </div>

      <Modal 
        header={modal.header}
        text={modal.text}
        closeButton={modal.closeButton}
        onCloseModal={handleCloseModal}
        actions={<ActionButtons confirmBtn={modal.btns?.first} closeBtn={modal.btns?.second} backgroundColor={modal.backgroundColor}/>}>
      </Modal>
    </div>
  );
}

export default App;