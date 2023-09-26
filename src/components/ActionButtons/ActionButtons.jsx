import Button from "../Button/Button";

function ActionButtons({ confirmBtn, closeBtn }) {
    return (
        <>
            <Button text={confirmBtn}/>
            <Button text={closeBtn}/>        
        </>
    );
}

export default ActionButtons;