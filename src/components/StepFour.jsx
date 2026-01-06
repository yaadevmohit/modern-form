import StepInfo from './StepInfo'
import formData from '../assets/formData'
import { useFormContext } from '../context/FormContext'

const StepFour = () => {
	const { isYearly, formData: formState, goToPlanStep } = useFormContext()
	const dataStepTwo = formData.stepTwoOptions
	const dataStepThree = formData.stepThreeOptions.filter((option) =>
		formState.addOns.includes(option.id),
	)

	const stepTwoElement = dataStepTwo.find(
		(option) => option.id === formState.plan,
	)
	const stepThreeElement = dataStepThree.map((option) => {
		return (
			<div className="summary-option" key={option.id}>
				<span className="sr-option">{option.name}</span>
				<span className="sr-option-price">
					{isYearly ? `+$${option.yrPrice}/yr` : `+$${option.moPrice}/mo`}
				</span>
			</div>
		)
	})

	return (
		<>
			<StepInfo
				heading="Finishing up"
				about="Double-check everything looks OK before confirming."
			/>
			<div className="summary-container">
				<div className="summary-option main">
					<div className="option-change">
						<span className="pr-option">{`${stepTwoElement.name} (${
							isYearly ? 'Yearly' : 'Monthly'
						})`}</span>
						<button onClick={goToPlanStep}>Change</button>
					</div>
					<span className="pr-option">
						{isYearly
							? `$${stepTwoElement.yrPrice}/yr`
							: `$${stepTwoElement.moPrice}/mo`}
					</span>
				</div>
				{stepThreeElement}
			</div>
			<div className="options-total">
				<span className="total">Total (per {isYearly ? 'year' : 'month'})</span>
				<span className="total-price">
					{isYearly
						? `$${
								stepTwoElement.yrPrice +
								dataStepThree.reduce(
									(accumulator, option) => accumulator + option.yrPrice,
									0,
								)
						}/yr`
						: `$${
								stepTwoElement.moPrice +
								dataStepThree.reduce(
									(accumulator, option) => accumulator + option.moPrice,
									0,
								)
						}/mo`}
				</span>
			</div>
		</>
	)
}

export default StepFour
