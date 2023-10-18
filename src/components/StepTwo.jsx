import StepInfo from './StepInfo'
import data from '../assets/formData'

const optionsData = data.stepTwoOptions
// eslint-disable-next-line react/prop-types
const StepTwo = ({ handleToggle, Yearly, handleSelected, selectedPlan }) => {

	
	return (
		<>
			<StepInfo
				heading="Select your plan"
				about="You have the option of monthly or yearly billing."
			/>
			<div className="step-two-options">
				{
					optionsData.map((option) => {
						const optionContainerClassName = `option-container ${
							selectedPlan === option.id ? 'option-container-selected' : ''
						}`
						return (
							<div
								className={optionContainerClassName}
								key={option.id}
								id={option.id}
								onClick={(e) => handleSelected(e, option.id)}
							>
								<img src={option.logo} />
								<label className="option" htmlFor={option.id}>
									{option.name}
									<span>
										{Yearly ? `$${option.yrPrice}/yr` : `$${option.moPrice}/mo`}
									</span>
									{Yearly && <span className="discount-span">2 Months free</span>}
								</label>
							</div>
						)
					})
				}
			</div>
			<div className="interval-toggle">
				<span>Monthly</span>
				<label className="switch">
					<input type="checkbox" onChange={handleToggle} checked={Yearly} />
					<span className="slider"></span>
				</label>
				<span>Yearly</span>
			</div>
		</>
	)
}

export default StepTwo
