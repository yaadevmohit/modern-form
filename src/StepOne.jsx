import React from 'react'
import StepInfo from './StepInfo'
import formData from "./assets/formData"

const StepOne = ({onChange, data}) => {

  const inputData = formData.stepOneInputs

  const formInputs = inputData.map( input => {
    return(
       <div className='form-field'>
            <legend htmlFor={input.id}>{input.name}</legend>
            <input required type={input.type} name={input.id} placeholder={input.placeholder}  className='form-input' onChange={onChange} value={data[input.id]}/>
        </div>
    )
  })
  return (
    <>
        <StepInfo heading="Personal info" about="Please provide your name, email address, and phone number."/>
        {formInputs}
    </>
  )
}

export default StepOne
