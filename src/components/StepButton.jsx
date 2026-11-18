import { useFormContext } from '../context/useFormContext'

export default function StepButton({ button }) {
	const { step } = useFormContext()

	return (
		<div className="form-step" aria-current={step === button.step ? 'step' : undefined}>
			<div
				className={
					step === button.step
						? 'form-step-button active'
						: 'form-step-button'
				}
			>
				{button.step}
			</div>
			<div className="step-info">
				<span className="button-name">
					{button.name}
					<br />
				</span>
				<span className="button-info">{button.info}</span>
			</div>
		</div>
	)
}
