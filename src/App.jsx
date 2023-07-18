import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import './index.css'

const colors = {
  marineBlue: "hsl(213, 96%, 18%)",
  lightGray: "hsl(229, 24%, 87%)",
  coolGray: "hsl(231, 11%, 63%)"

}

const StepInfo = ({heading, about}) => {

    const styles = {
      headingInfo: {
        marginBottom: "8px",
        font: "32px",
        fontFamily: "Ubuntu-Bold",
        color: "hsl(213, 96%, 18%)"
      },
      aboutInfo: {
        color: colors.coolGray, 
        fontFamily: "Ubuntu-Regular", 
        fontWeight: "Medium",
        fontSize: "16px"
      }
    }
  return (
    <div >
      <h2 style={styles.headingInfo}>{heading}</h2>
      <span style={styles.aboutInfo}>{about}</span>
    </div>
  )
}

const App = () =>  {
  
  const styles = {

    formContainer: {
      display: 'flex',
      flexFlow: "column wrap",
      alignItems: "center"
    },
    formStepContainer: {
      display: 'flex'
    },
    formStep: {
      width: '32px',
      height: "32px",
      fontSize: "1rem",
      borderRadius: "100%",
      backgroundColor: 'transparent',
      border: "solid white",
      color: "white",
      margin: "28px 8px"
    },
    mainForm: {
      background: 'snow',
      marginLeft: "15px",
      marginRight: '15px',
      padding: "6px 24px",
      borderRadius: "8px",
    },


  }

  return (
    <>
      <div style={styles.formContainer}>
        <div  style={styles.formStepContainer}>
          <button style={styles.formStep}>1</button>
          <button style={styles.formStep}>2</button>
          <button style={styles.formStep}>3</button>
          <button style={styles.formStep}>4</button>
        </div>
        <form style={styles.mainForm}>
          <StepInfo heading="Personal Info" about="Please enter your Name, email address and phone number"/>
          <StepOne />
        </form>
      </div>
    </>
  )
}

export default App
