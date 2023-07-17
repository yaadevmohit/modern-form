import { useState } from 'react'
import StepOne from './assets/StepOne'

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
      padding: "20px 12px",
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
          <StepOne />
        </form>
      </div>
    </>
  )
}

export default App
