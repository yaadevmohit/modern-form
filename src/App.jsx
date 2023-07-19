import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepInfo from './StepInfo'
import Footer from './Footer'
import './index.css'
import StepThree from './StepThree'


const colors = {
  white: "hsl(0, 0%, 100%)"
}

const App = () =>  {
  
  const styles = {

    formContainer: {
      display: 'flex',
      flexFlow: "column wrap",
      alignItems: "center",
      position: "relative",
      minHeight: "100vh"
    },
    formStepContainer: {
      display: 'flex',
    },
    formStep: {
      width: '2.25rem',
      height: "2.25rem",
      fontSize: "1.25rem",
      borderRadius: "100%",
      backgroundColor: 'transparent',
      border: "solid white",
      borderWidth: "thin",
      color: "white",
      margin: "2.4rem 0.67rem",
      cursor: "pointer"
    },
    mainForm: {
      background: colors.white,
      marginLeft: "0.8rem",
      marginRight: '0.8rem',
      padding: "0.5rem 2rem",
      borderRadius: "8px",
    },


  }

  return (
    <>
      <div style={styles.formContainer}>
        <div  style={styles.formStepContainer}>
          <button style={styles.formStep} onClick={() => alert("step one clicked")}>1</button>
          <button style={styles.formStep}>2</button>
          <button style={styles.formStep}>3</button>
          <button style={styles.formStep}>4</button>
        </div>
        <form style={styles.mainForm}>
          <StepInfo heading="Pick add-ons" about="Add-ons help enhance your gaming experience"/>
          <StepOne />
          <StepTwo />
          <StepThree />
        </form>
        <Footer />
      </div>

    </>
  )
}

export default App
