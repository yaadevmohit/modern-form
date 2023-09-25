import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Footer from './Footer'
import './index.css'
import './App.css'
import StepThree from './StepThree'
import data from "./assets/formData"
import Summary from './Summary'
import ThankYou from './ThankYou'

const App = () =>  {

  const [step, setStep] = useState(1)
  
  const [formData, setFormData] = useState(
    {
        name: "",
        email: "",
        phone: "",
        plan: "arcade",
        addOns: [], 
      }
      )
  const [errors, setErrors] = useState({})
  console.log(errors)
  const [isYearly, setIsYearly] = useState(false)


  function handleClick(e) {
    e.preventDefault()
    if (e.target.value == "back-btn" && step > 1) {
      setStep(step - 1)
    }
    else if (e.target.value == 'fwd-btn' && step <= 4){
      if (step === 1) {
        const validationErrors = {}
        if(!formData.name.trim())   {
          validationErrors.name = "Username is required"
        }
        if(!formData.email.trim()) {
          validationErrors.email = "Email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) {
          validationErrors.email= "Email is not valid"
        }
        if(!formData.phone.trim()) {
          validationErrors.phone= "Phone is required"
        } else if(!/^\d+$/.test(formData.phone) || formData.phone.length !== 10) {
          validationErrors.phone= "Phone number is not valid"
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0) {
          setStep(2)
        }
      }
      else if (step === 2) {
        (formData.plan.length > 0 && setStep(step + 1))
      }
      else {
        setStep(step + 1)
      }
    }
    else if (e.target.value == "change") {
      setStep(2)
    }
    else {
      setStep(e.target.value)
    }
  }

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function handleSelected(e, optionId) {
    if (e.target.type === "checkbox") {
      if (formData.addOns.includes(e.target.name)) {
        const currentOptions = formData.addOns.filter(option => option !== e.target.name)
        setFormData(prevData => {
          return {
            ...prevData,
            addOns: currentOptions
          }
        })
      }
      else 
      {
      setFormData(prevData => {
        return {
          ...prevData,
          addOns: [...prevData.addOns, e.target.name]
        }
      })
      }
    }
    else {
    setFormData(prevData  => {
      return {
        ...prevData,
        plan: optionId
      }
    })
    }
  }
  function handleYearlyToggle() {
    setIsYearly(!isYearly)
  }
  const buttonsData = data.formSteps
  const formButtons = buttonsData.map(button => {
    return (<div className='form-step' key={button.key}>
              <div 
                className={step === button.key ? "form-step-button active" : "form-step-button"} key={button.key}
              >
                {button.key}
              </div>
              <div className="step-info">
                <span id="button-name">{button.name}<br/></span>
                <span id="button-info">{button.info}</span>
              </div> 
            </div>
          )
    })

  return (
    <>
      <div className='form-container'>
        <div  className='form-step-container'>
                  {formButtons}
        </div>
        <form className='main-form'>
          <div className='form-input-container'>
            {step == 1 
              && 
            <StepOne 
              onChange={handleChange} 
              data={formData} 
              onClick={handleClick}
              errors={errors}
            />} 
            {step == 2 && <StepTwo handleToggle={handleYearlyToggle} handleSelected={handleSelected} Yearly={isYearly} selectedPlan={formData.plan} onClick={handleClick}/> }
            {step == 3 && <StepThree yearly={isYearly} handleChange={handleSelected} selectedAddOns={formData.addOns}/>} 
            {step == 4 && <Summary yearly={isYearly} planSelected={formData.plan} addOnsSelected={formData.addOns} handleClick={handleClick}/>}
            {step > 4 && <ThankYou />}            
          </div>
          {step <= 4 && <Footer handleClick={handleClick} step={step}/>}
        </form>
      </div>

    </>
  )
}

export default App
