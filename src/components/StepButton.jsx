import { useFormContext } from '../context/FormContext'

// eslint-disable-next-line react/prop-types
export default function StepButton({ button }) {
	const { step } = useFormContext()

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
}