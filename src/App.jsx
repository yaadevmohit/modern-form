import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepInfo from './StepInfo'
import Footer from './Footer'
import './index.css'
import './App.css'
import StepThree from './StepThree'


const colors = {
  white: "hsl(0, 0%, 100%)"
}


const App = () =>  {
  
  const styles = {
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
      <div className='form-container'>
        <div  className='form-step-container'>
          <button className="form-step" onClick={() => alert("step one clicked")}>1</button>
          <button className="form-step" >2</button>
          <button className="form-step" >3</button>
          <button className="form-step" >4</button>
        </div>
        <form className='main-form'>
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
