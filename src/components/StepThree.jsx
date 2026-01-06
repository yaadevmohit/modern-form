import data from '../assets/formData'
import StepInfo from './StepInfo'
import { useFormContext } from '../context/FormContext'

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
					<div
						className={`option-container-three ${
							isSelected ? 'option-container-selected' : ''
						}`}
						key={option.id}
						onClick={() => toggleAddOn(option.id)}
					>
						<input
							type="checkbox"
							name={option.id}
							value={option.id}
							checked={isSelected}
							readOnly
						/>
						<label className="option" htmlFor={option.id}>
							{option.name}
							<span>{option.info}</span>
						</label>
						<span className="add-price">
							{isYearly ? `+$${option.yrPrice}/yr` : `+$${option.moPrice}/mo`}
						</span>
					</div>
				)
			})}
		</>
	)
}

export default StepThree
