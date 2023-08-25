
const InputField = ({name, id, type, placeholder, onChange, value}) => {

    return (
        <div className='form-field'>
            <legend for={id}>{name}</legend>
            <input required type={type} id={id} name={id} placeholder={placeholder} className='form-input' onChange={onChange} value={value}/>
        </div>
    )
}


export default InputField