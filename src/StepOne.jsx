import React from 'react'
import StepInfo from './StepInfo'
import formData from "./assets/formData"

const StepOne = ({onChange, data, error}) => {

  const inputData = formData.stepOneInputs
  const styles = {
    borderColor: "red",
  }
  const formInputs = inputData.map( input => {
    return(
       <div className='form-field' key={input.id}>
            <legend htmlFor={input.id}>{input.name}</legend>
            <input required type={input.type} name={input.id} placeholder={input.placeholder}  className='form-input' onChange={onChange} value={data[input.id]}/>
            {/* <p>Input field required</p> */}
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
