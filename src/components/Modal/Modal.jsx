import './Modal.scss';
import PropTypes from 'prop-types';

function Modal({header, text, closeButton, onCloseModal, actions}) {

    const handleClose = (e) => {
        if (e.target.className.includes('overlay') || e.target.className === 'close__btn') onCloseModal();
    }

    return (
        <div className={"overlay" +  (closeButton ? " show" : '')} onClick={handleClose}>
            <div className="modal">
                {closeButton && <button className='close__btn'>x</button>}
                <h2 className='modal__header'>{header}</h2>
                <p className='modal__text'>{text}</p>
                {actions}
            </div>
        </div>
    );
}

Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string
}


export default Modal;