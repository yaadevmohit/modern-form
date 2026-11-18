import { useFormContext } from '../context/useFormContext'

const Footer = () => {
	const { step, goBack } = useFormContext()

	return (
		<div className="footer-buttons">
			<button
				className={step > 1 ? 'backward-button' : 'hide-btn'}
				onClick={goBack}
				type="button"
			>
				Go Back
			</button>
			<button className="forward-button" type="submit">
				{step < 4 ? 'Next Step' : 'Confirm'}
			</button>
		</div>
	)
}

export default Footer
