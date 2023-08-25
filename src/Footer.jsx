const Footer = ({handleClick, step}) => {
    return (
        <>
            <div className='footerButtons'>
                <button className={step > 1 ? 'backward-button' : 'hide-btn'} onClick={handleClick} value="back-btn">Go Back</button>
                <button className='forwardButton' onClick={handleClick} value="fwd-btn">Next Step</button>
            </div>
             
        </>
    )
}

export default Footer