
const InputField = ({name, id, type, placeholder}) => {

    return (
        <div className='form-field'>
            <legend for={id}>{name}</legend>
            <input type={type} id={id} name={id} placeholder={placeholder} className='form-input'/>
        </div>
    )
}


export default InputField