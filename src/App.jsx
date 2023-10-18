import { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Footer from './Footer'
import './index.css'
import './App.css'
import StepThree from './StepThree'
import data from './assets/formData'
import Summary from './Summary'
import ThankYou from './ThankYou'

const validateStepOne = (formData) => {
	const validationErrors = {}
	// initializing object to contain errors
	if (!formData.name.trim()) {
		validationErrors.name = 'Username is required'
	}
	if (!formData.email.trim()) {
		validationErrors.email = 'Email is required'
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		validationErrors.email = 'Email is not valid'
	}
	if (!formData.phone.trim()) {
		validationErrors.phone = 'Phone is required'
	} else if (!/^\d+$/.test(formData.phone) || formData.phone.length !== 10) {
		validationErrors.phone = 'Phone number not valid'
	}

	return validationErrors
}

const App = () => {
	// form current step
	const [step, setStep] = useState(1)

	// data across all steps
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		plan: 'arcade',
		addOns: [],
	})

	// data state for step one errors only
	const [stepOneErrors, setErrors] = useState({})

	// yearly subscription toggle state
	const [isYearly, setIsYearly] = useState(false)

	const handleClick = (e) => {
		e.preventDefault()

		// move one step back
		if (e.target.value == 'back-btn' && step > 1) {
			setStep(step - 1)
		} else if (e.target.value == 'fwd-btn' && step <= 4) {
			if (step === 1) {
				// input validatons for step 1
				const validationErrors = validateStepOne(formData)
				setErrors(validationErrors)
				// if no errors then move to next step
				if (Object.keys(validationErrors).length === 0) {
					setStep(2)
				}
			} else if (step === 2) {
				formData.plan.length > 0 && setStep(step + 1)
			} else {
				setStep(step + 1)
			}
		} else if (e.target.value == 'change') {
			setStep(2)
		}
	}

	// used to handle input chanegs in step 1
	const handleStepOneChange = (event) => {
		const { name, value } = event.target
		setFormData((prevData) => {
			return {
				...prevData,
				[name]: value,
			}
		})
	}
	// used to handle changes for plans and addons
	const handleSelected = (e, optionId) => {
		if (e.target.type === 'checkbox') {
			if (formData.addOns.includes(e.target.name)) {
				const currentOptions = formData.addOns.filter(
					(option) => option !== e.target.name,
				)
				setFormData((prevData) => {
					return {
						...prevData,
						addOns: currentOptions,
					}
				})
			} else {
				setFormData((prevData) => {
					return {
						...prevData,
						addOns: [...prevData.addOns, e.target.name],
					}
				})
			}
		} else {
			setFormData((prevData) => {
				return {
					...prevData,
					plan: optionId,
				}
			})
		}
	}
	const handleYearlyToggle = () => {
		setIsYearly(!isYearly)
	}
	const buttonsData = data.formSteps

	return (
		<>
			<div className="form-container">
				<div className="form-step-container">
					{buttonsData.map((button) => {
						return (
							<div className="form-step" key={button.step}>
								<div
									className={
										step === button.step
											? 'form-step-button active'
											: 'form-step-button'
									}
									key={button.step}
								>
									{button.step}
								</div>
								<div className="step-info">
									<span className="button-name">
										{button.name}
										<br />
									</span>
									<span id="button-info">{button.info}</span>
								</div>
							</div>
						)
					})}
				</div>
				<form className="main-form" onSubmit={handleClick}>
					<div className="form-input-container">
						{step == 1 && (
							<StepOne
								onChange={handleStepOneChange}
								data={formData}
								onClick={handleClick}
								errors={stepOneErrors}
							/>
						)}
						{step == 2 && (
							<StepTwo
								handleToggle={handleYearlyToggle}
								handleSelected={handleSelected}
								Yearly={isYearly}
								selectedPlan={formData.plan}
								onClick={handleClick}
							/>
						)}
						{step == 3 && (
							<StepThree
								yearly={isYearly}
								handleChange={handleSelected}
								selectedAddOns={formData.addOns}
							/>
						)}
						{step == 4 && (
							<Summary
								yearly={isYearly}
								planSelected={formData.plan}
								addOnsSelected={formData.addOns}
								handleClick={handleClick}
							/>
						)}
						{step > 4 && <ThankYou />}
					</div>
					{step <= 4 && <Footer handleClick={handleClick} step={step} />}{' '}
				</form>
			</div>
		</>
	)
}

export default App
