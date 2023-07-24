import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepInfo from './StepInfo'
import Footer from './Footer'
import './index.css'
import './App.css'
import StepThree from './StepThree'

const App = () =>  {
  const [step, setStep] = useState(1)
  function handleClick(e) {
    if (e.target.value == "back-btn" && step > 1) {
      setStep(step - 1)
    }
    else if (e.target.value == 'fwd-btn' && step <= 4){
    setStep(step + 1)
    }
    else {
      setStep(e.target.value)
    }
  }

  return (
    <>
      <div className='form-container'>
        <div  className='form-step-container'>
          <button className={step === 1 ? "form-step active" : "form-step"}>1</button>
          <button className={step === 2 ? "form-step active" : "form-step"}>2</button>
          <button className={step === 3 ? "form-step active" : "form-step"}>3</button>
          <button className={step === 4 ? "form-step active" : "form-step"}>4</button>
        </div>
        <form className='main-form'>
          <StepInfo heading="Pick add-ons" about="Add-ons help enhance your gaming experience"/>
          {step == 1 ? <StepOne /> : step == 2 ? <StepTwo /> : <StepThree/>}
        </form>
        {step <= 4 && <Footer handleClick={handleClick} step={step}/>}
      </div>

    </>
  )
}

export default App
