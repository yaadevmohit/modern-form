import StepInfo from './StepInfo'
import formData from '../assets/formData'
import { useFormContext } from '../context/useFormContext'

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
				const isError = Boolean(stepOneErrors[input.id])

				return (
					<div className="form-field" key={input.id}>
						<label htmlFor={input.id}>{input.name}</label>
						{stepOneErrors[input.id] && (
							<span className="validation-error" id={`${input.id}-error`} role="alert">{stepOneErrors[input.id]}</span>
						)}
						<input
							id={input.id}
							type={input.type}
							aria-invalid={isError}
							aria-describedby={isError ? `${input.id}-error` : undefined}
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
