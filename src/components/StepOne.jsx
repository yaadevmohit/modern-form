import StepInfo from './StepInfo'
import formData from '../assets/formData'
import { useFormContext } from '../context/FormContext'

const StepOne = () => {
	const { formData: formState, stepOneErrors, updateField } = useFormContext()
	const inputData = formData.stepOneInputs

	const handleChange = (event) => {
		const { name, value } = event.target
		updateField(name, value)
	}

	return (
		<>
			<StepInfo
				heading="Personal info"
				about="Please provide your name, email address, and phone number."
			/>
			{inputData.map((input) => {
				const isError = stepOneErrors[input.id] ? true : false

				return (
					<div className="form-field" key={input.id}>
						<legend htmlFor={input.id}>{input.name}</legend>
						{stepOneErrors[input.id] && (
							<span className="validation-error">{stepOneErrors[input.id]}</span>
						)}
						<input
							type={input.type}
							name={input.id}
							placeholder={input.placeholder}
							className="form-input"
							onChange={handleChange}
							value={formState[input.id] || ''}
							style={isError ? { borderColor: 'red' } : {}}
						/>
					</div>
				)
			})}
		</>
	)
}

export default StepOne
