import { useFormContext } from '../context/FormContext'

const Footer = () => {
	const { step, goBack, goForward } = useFormContext()

	const handleBack = (e) => {
		e.preventDefault()
		goBack()
	}

	const handleForward = (e) => {
		e.preventDefault()
		goForward()
	}

	return (
		<div className="footer-buttons">
			<button
				className={step > 1 ? 'backward-button' : 'hide-btn'}
				onClick={handleBack}
			>
				Go Back
			</button>
			<button
				className={step <= 4 ? 'forward-button' : 'hide-btn'}
				onClick={handleForward}
				type="button"
			>
				{step < 4 ? 'Next Step' : 'Confirm'}
			</button>
		</div>
	)
}

export default Footer