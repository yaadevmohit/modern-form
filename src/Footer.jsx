const Footer = ({handleClick, step}) => {
    return (
        <>
            <div className='footer-buttons'>
                <button className={step > 1 ? 'backward-button' : 'hide-btn'} onClick={handleClick} value="back-btn">Go Back</button>
                <button className={step <= 4 ? 'forward-button' : 'hide-btn'} onClick={handleClick} value="fwd-btn" type="submit">{step < 4 ? "Next Step" : "Confirm"}</button>
            </div>

        </>
    )
}

export default Footer