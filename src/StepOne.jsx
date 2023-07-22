import React from 'react'
import InputField from './InputField'

const StepOne = () => {

  return (
    <>
        <InputField name="Name" id="name" type="text" placeholder="e.g. stephen king"/>
        <InputField name="Email" id="email" type="mail" placeholder="e.g. thisaexample@example.com" />
        <InputField name="Phone Number" id="phone" type="tel" placeholder="+1 1234567890" />
    </>
  )
}

export default StepOne
