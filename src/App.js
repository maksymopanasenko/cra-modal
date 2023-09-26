import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ActionButtons from './components/ActionButtons/ActionButtons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button
        backgroundColor="#5d2fb0"
        text="Open first modal"
        onClick={() => console.log('click')}
      />

      <Modal 
        header='Do you want to delete this file?'
        text='Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete it?'
        closeButton
        onCloseModal={() => console.log('close')}
        actions={<ActionButtons confirmBtn="Ok" closeBtn="Cancel"/>}>
      </Modal>
    </div>
  );
}

export default App;