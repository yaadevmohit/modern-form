import { useEffect, useRef } from 'react'
import { useFormContext } from '../context/useFormContext'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import StepFour from '../components/StepFour'
import ThankYou from '../components/ThankYou'
import StepButton from '../components/StepButton'
import Footer from '../components/Footer'
import data from '../assets/formData'

const FormContent = () => {
	const { step, goForward } = useFormContext()
	const buttonsData = data.formSteps
	const contentRef = useRef(null)

	useEffect(() => {
		contentRef.current.scrollTop = 0
	}, [step])

	const handleSubmit = (event) => {
		event.preventDefault()
		goForward()
	}

	return (
		<div className="form-container">
			<div className="form-step-container">
				{buttonsData.map((button) => (
					<StepButton key={button.step} button={button} />
				))}
			</div>
			<form className="main-form" onSubmit={handleSubmit} noValidate autoComplete="off">
				<div className="form-input-container" ref={contentRef}>
					{step === 1 && <StepOne />}
					{step === 2 && <StepTwo />}
					{step === 3 && <StepThree />}
					{step === 4 && <StepFour />}
					{step > 4 && <ThankYou />}
				</div>
				{step <= 4 && <Footer />}
			</form>
		</div>
	)
}

export default FormContent
