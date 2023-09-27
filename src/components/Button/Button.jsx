import './Button.scss';
import PropTypes from 'prop-types';

function Button({backgroundColor, text, onClick}) {
    return (
        <button className='btn' style={{ backgroundColor: backgroundColor}} onClick={onClick} >
            {text}
        </button>
    );
}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;