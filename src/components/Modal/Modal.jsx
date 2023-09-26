import './Modal.scss';

function Modal({header, text, closeButton, onCloseModal, actions}) {

    const handleClose = (e) => {
        if (e.target.className === 'overlay') onCloseModal();
    }

    return (
        <div className="overlay" onClick={handleClose}>
            <div className="modal">
                {closeButton && <button className='close__btn'>x</button>}
                <h2 className='modal__header'>{header}</h2>
                <p className='modal__text'>{text}</p>
                <div className='modal__actions'>{actions}</div>
            </div>
        </div>
    )
}

export default Modal;


// import styles from './Modal.module.scss';
// import { MdClear } from 'react-icons/md';

// const Modal = ({ header, text, isCloseButton, closeHandler, actions }) => {
//   const closeModalOutSide = (e) => {
//     if (e.target.id === 'overlayPopup') {
//       closeHandler();
//     }
//   };
//   return (
//     <div id='overlayPopup' className={styles.popupOverlay} onClick={closeModalOutSide}>
//       <div className={styles.popup}>
//         <div className={styles.popupHeader}>
//           {header}
//           {isCloseButton && (
//             <MdClear className={styles.closeIcon} onClick={closeHandler} />
//           )}
//         </div>
//         <div className={styles.popupBody}>{text}</div>
//         <div className={styles.wrapperBtns}>{actions}</div>
//       </div>
//     </div>
//   );
// };
