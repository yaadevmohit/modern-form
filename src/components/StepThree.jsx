import data from '../assets/formData'
import StepInfo from './StepInfo'
import { useFormContext } from '../context/useFormContext'

const optionsData = data.stepThreeOptions

const StepThree = () => {
	const { isYearly, formData, toggleAddOn } = useFormContext()

	return (
		<>
			<StepInfo
				heading="Pick add-ons"
				about="Add-ons help enhance your gaming experience."
			/>
			{optionsData.map((option) => {
				const isSelected = formData.addOns.includes(option.id)
				return (
					<label
						className={`option-container-three ${
							isSelected ? 'option-container-selected' : ''
						}`}
						key={option.id}
					>
						<input
							type="checkbox"
							name={option.id}
							value={option.id}
							checked={isSelected}
							onChange={() => toggleAddOn(option.id)}
						/>
						<span className="option">
							{option.name}
							<span>{option.info}</span>
						</span>
						<span className="add-price">
							{isYearly ? `+$${option.yrPrice}/yr` : `+$${option.moPrice}/mo`}
						</span>
					</label>
				)
			})}
		</>
	)
}

export default StepThree
