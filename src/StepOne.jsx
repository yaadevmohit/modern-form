import React from 'react'
import InputField from './InputField'
import StepInfo from './StepInfo'

const StepOne = ({onChange, value}) => {

  return (
    <>
        <StepInfo heading="Personal info" about="Please provide your name, email address, and phone number."/>
        <InputField name="name" id="name" type="text" placeholder="e.g. stephen king" onChange={onChange} value={value.name} />
        <InputField name="email" id="email" type="mail" placeholder="e.g. anexample@example.com" onChange={onChange} value={value.email}/>
        <InputField name="phone" id="phone" type="tel" placeholder="+1 1234567890" onChange={onChange} value={value.phone}/>
    </>
  )
}

export default StepOne
