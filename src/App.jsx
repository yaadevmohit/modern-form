import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Footer from './Footer'
import './index.css'
import './App.css'
import StepThree from './StepThree'
import data from "./assets/formData"

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

  const buttonsData = data.formSteps
  const formButtons = buttonsData.map(button => {
    return (<div className='form-step'>
              <div 
                className={step === button.key ? "form-step-button active" : "form-step-button"} key={button.key}
              >
                {button.key}
              </div>
            <div className="step-info">
              <span id="button-name">{button.name}<br/></span>
              <span id="button-info">{button.info}</span>
            </div> 
            </div>)
  })

  return (
    <>
      <div className='form-container'>
        <div  className='form-step-container'>
                  {formButtons}
        </div>
        <form className='main-form'>
          <div className='form-input-container'>
            {
              step == 1 ? <StepOne onChange={handleChange} data={formData}/> 
              : 
                step == 2 ? <StepTwo /> 
              : 
                step==3 ? <StepThree/> 
              : 
                <div></div>
            }
          </div>
          {step <= 4 && <Footer handleClick={handleClick} step={step}/>}
        </form>
      </div>

    </>
  )
}

export default App
