import React from 'react'

const colors = {
    coolGray: "hsl(231, 11%, 63%)",
    lightGray: "hsl(229, 24%, 87%)"
}

const InputField = ({name, id, type, placeholder}) => {
    const styles = {
        formField: {
            margin: "20px 8px 20px 0px",
            fontFamily: "Ubuntu-Medium"
        },

        formInput: {
            width: "100%",
            height: "30px",
            marginTop: "4px",
            borderRadius: "4px",
            border: `${colors.lightGray} solid`,
            borderWidth: "thin",
            paddingLeft: "14px",
            fontFamily: "Ubuntu-Regular",
        }
    }
    return (
        <div style={styles.formField}>
            <legend for={id}>{name}</legend>
            <input type={type} id={id} name={id} placeholder={placeholder} style={styles.formInput}/>
        </div>
    )
}




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
