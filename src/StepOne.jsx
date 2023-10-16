import StepInfo from './StepInfo'
import formData from './assets/formData'

// eslint-disable-next-line react/prop-types
const StepOne = ({ onChange, data, errors }) => {
	// getting data for step one inputs
	const inputData = formData.stepOneInputs

	return (
		<>
			<StepInfo
				heading="Personal info"
				about="Please provide your name, email address, and phone number."
			/>
			{inputData.map((input) => {
				const isError = errors[input.id] ? true : false

				return (
					<div className="form-field" key={input.id}>
						<legend htmlFor={input.id}>{input.name}</legend>
						{errors[input.id] && (
							<span className="validation-error">{errors[input.id]}</span>
						)}
						<input
							type={input.type}
							name={input.id}
							placeholder={input.placeholder}
							className="form-input"
							onChange={onChange}
							value={data[input.id] || ''}
							style={isError ? { bordercolor: 'red' } : {}} // inline style for input border only
						/>
					</div>
				)
			})}
		</>
	)
}

export default StepOne
