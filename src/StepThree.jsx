import data from './assets/formData'
import StepInfo from './StepInfo'

const optionsData = data.stepThreeOptions

// eslint-disable-next-line react/prop-types
const StepThree = ({ yearly, handleChange, selectedAddOns }) => {
	const options = optionsData.map((option) => {
		return (
			<div
				className={`option-container-three ${
					// eslint-disable-next-line react/prop-types
					selectedAddOns.includes(option.id) && 'option-container-selected'
				}`}
				key={option.id}
			>
				<input
					type="checkbox"
					name={option.id}
					value={option.id}
					onChange={handleChange}
					// eslint-disable-next-line react/prop-types
					checked={selectedAddOns.includes(option.id)}
				/>
				<label className="option" htmlFor={option.id}>
					{option.name}
					<span>{option.info}</span>
				</label>
				<span className="add-price">
					{yearly ? `+$${option.yrPrice}/yr` : `+$${option.moPrice}/mo`}
				</span>
			</div>
		)
	})
	return (
		<>
			<StepInfo
				heading="Pick add-ons"
				about="Add-ons help enhance your gaming experience."
			/>
			{options}
		</>
	)
}

export default StepThree
