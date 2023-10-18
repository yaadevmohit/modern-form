import StepInfo from './StepInfo'
import formData from '../assets/formData'


const StepFour = ({ yearly, planSelected, addOnsSelected, handleClick }) => {
	const dataStepTwo = formData.stepTwoOptions
	const dataStepThree = formData.stepThreeOptions.filter((option) =>
		addOnsSelected.includes(option.id),
	)

	const stepTwoElement = dataStepTwo.find(
		(option) => option.id === planSelected,
	)
	const stepThreeElement = dataStepThree.map((option) => {
		return (
			<div className="summary-option" key={option.id}>
				<span className="sr-option">{option.name}</span>
				<span className="sr-option-price">
					{yearly ? `+$${option.yrPrice}/yr` : `+$${option.moPrice}/mo`}
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
							yearly ? 'Yearly' : 'Monthly'
						})`}</span>
						<button onClick={handleClick} value="change">
							Change
						</button>
					</div>
					<span className="pr-option">
						{yearly
							? `$${stepTwoElement.yrPrice}/yr`
							: `$${stepTwoElement.moPrice}/mo`}
					</span>
				</div>
				{stepThreeElement}
			</div>
			<div className="options-total">
				<span className="total">Total (per {yearly ? 'year' : 'month'})</span>
				<span className="total-price">
					{yearly
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
