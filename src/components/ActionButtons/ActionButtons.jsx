import Button from "../Button/Button";
import './ActionButtons.scss';

function ActionButtons({ confirmBtn, closeBtn, backgroundColor }) {
    return (
        <div className="action__btns">
            <Button text={confirmBtn} backgroundColor={backgroundColor}/>
            <Button text={closeBtn} backgroundColor={backgroundColor}/>        
        </div>
    );
}

export default ActionButtons;