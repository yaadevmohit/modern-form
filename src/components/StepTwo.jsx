import StepInfo from './StepInfo'
import data from '../assets/formData'
import { useFormContext } from '../context/useFormContext'

const optionsData = data.stepTwoOptions

const StepTwo = () => {
	const { isYearly, formData, toggleYearly, selectPlan } = useFormContext()

	return (
		<>
			<StepInfo
				heading="Select your plan"
				about="You have the option of monthly or yearly billing."
			/>
			<div className="step-two-options">
				{optionsData.map((option) => {
					const optionContainerClassName = `option-container ${
						formData.plan === option.id ? 'option-container-selected' : ''
					}`
					return (
						<button
							type="button"
							aria-pressed={formData.plan === option.id}
							className={optionContainerClassName}
							key={option.id}
							id={option.id}
							onClick={() => selectPlan(option.id)}
						>
							<img src={option.logo} alt="" />
							<span className="option">
								{option.name}
								<span>
									{isYearly ? `$${option.yrPrice}/yr` : `$${option.moPrice}/mo`}
								</span>
								{isYearly && <span className="discount-span">2 Months free</span>}
							</span>
						</button>
					)
				})}
			</div>
			<div className="interval-toggle">
				<span>Monthly</span>
				<label className="switch">
					<input type="checkbox" aria-label="Yearly billing" onChange={toggleYearly} checked={isYearly} />
					<span className="slider"></span>
				</label>
				<span>Yearly</span>
			</div>
		</>
	)
}

export default StepTwo
