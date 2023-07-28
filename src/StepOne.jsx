import React from 'react'
import InputField from './InputField'
import StepInfo from './StepInfo'

const StepOne = () => {

  return (
    <>
        <StepInfo heading="Personal info" about="Please provide your name, email address, and phone number."/>
        <InputField name="Name" id="name" type="text" placeholder="e.g. stephen king"/>
        <InputField name="Email" id="email" type="mail" placeholder="e.g. anexample@example.com" />
        <InputField name="Phone Number" id="phone" type="tel" placeholder="+1 1234567890" />
    </>
  )
}

export default StepOne
