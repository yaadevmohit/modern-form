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
  const [formData, setFormData] = useState(
    {
        name: "",
        email: "",
        phone: "",
      })

  function handleClick(e) {
    e.preventDefault()
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

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  return (
    <>
      <div className='form-containr'>
        <div  className='form-step-container'>
          <button className={step === 1 ? "form-step active" : "form-step"}>1</button>
          <button className={step === 2 ? "form-step active" : "form-step"}>2</button>
          <button className={step === 3 ? "form-step active" : "form-step"}>3</button>
          <button className={step === 4 ? "form-step active" : "form-step"}>4</button>
        </div>
        <form className='main-form'>
          {step == 1 ? <StepOne onChange={handleChange} value={formData}/> : step == 2 ? <StepTwo /> : step==3 ? <StepThree/> : <div></div>}
          {step <= 4 && <Footer handleClick={handleClick} step={step}/>}
        </form>
      </div>

    </>
  )
}

export default App
