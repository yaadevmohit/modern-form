import React from 'react'

const InputField = ({name, id, type, placeholder}) => {

    const styles = {
        formField: {
            margin: "20px"
        },

        formInput: {
            width: "100%",
            height: "30px",
            borderRadius: "4px",
            border: "lightgrey solid",
            paddingLeft: "14px"
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

    const styles = {
        stageHeading: {
            margin: "20px"
        }
    }

  return (
    <>
        <div style={styles.stageHeading}>
            <h2>Personal info</h2>
            <span>Please provide your name, email address and phone number.</span>
        </div>
        <InputField name="Name" id="name" type="text" placeholder="e.g. stephen king"/>
        <InputField name="Email" id="email" type="mail" placeholder="e.g. thisaexample@example.com" />
        <InputField name="Phone Number" id="phone" type="tel" placeholder="+1 1234567890" />
    </>
  )
}

export default StepOne
