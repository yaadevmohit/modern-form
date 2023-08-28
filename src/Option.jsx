const Option = ({inputName, nameDetail, logo, type, children}) => {


    return(
        <div className='option-container'>
            <input type={type} id= {inputName} name={inputName} value={inputName}  />    
            <img src={logo}/>
            <label className='option' htmlFor={inputName}>
                {inputName}
                <span>{nameDetail}</span>
            </label>
            {children}
        </div>
    )
}

export default Option