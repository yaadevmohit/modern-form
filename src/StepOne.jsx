import React from 'react'
import StepInfo from './StepInfo'
import formData from "./assets/formData"

const StepOne = ({onChange, data, errors}) => {
  // getting data for step one inputs
  const inputData = formData.stepOneInputs
  const styles = {
    borderColor: "red",
  }
  const inputFields = inputData.map( input => {
    return(
       <div className='form-field' key={input.id}>
            <legend htmlFor={input.id}>
              {input.name}
            </legend>
            {errors[input.id] && <span className='validation-error'>{errors[input.id]}</span>}
            <input 
              type={input.type} 
              name={input.id} 
              placeholder={input.placeholder}  
              className='form-input' 
              onChange={onChange} 
              value={data[input.id] || ''}
              style={errors[input.id] && styles} // inline style for input border only
            />
        </div>
    )
  })
  return (
    <>
        <StepInfo 
          heading="Personal info" 
          about="Please provide your name, email address, and phone number."
        />
        {inputFields}
    </>
  )
}

export default StepOne
