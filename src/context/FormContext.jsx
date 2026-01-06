import { createContext, useContext, useMemo, useState } from 'react'

// Simple step-one validation extracted for reuse
const validateStepOne = (formData) => {
	const validationErrors = {}
	if (!formData.name.trim()) validationErrors.name = 'Username is required'
	if (!formData.email.trim()) {
		validationErrors.email = 'Email is required'
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		validationErrors.email = 'Email is not valid'
	}
	if (!formData.phone.trim()) {
		validationErrors.phone = 'Phone is required'
	} else if (!/^\d+$/.test(formData.phone) || formData.phone.length !== 10) {
		validationErrors.phone = 'Phone number not valid'
	}
	return validationErrors
}

const FormContext = createContext(null)

export const FormProvider = ({ children }) => {
	const [step, setStep] = useState(1)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		plan: 'arcade',
		addOns: [],
	})
	const [isYearly, setIsYearly] = useState(false)
	const [stepOneErrors, setStepOneErrors] = useState({})

	const toggleYearly = () => setIsYearly((prev) => !prev)

	const updateField = (name, value) =>
		setFormData((prev) => ({ ...prev, [name]: value }))

	const selectPlan = (plan) => setFormData((prev) => ({ ...prev, plan }))

	const toggleAddOn = (id) =>
		setFormData((prev) => ({
			...prev,
			addOns: prev.addOns.includes(id)
				? prev.addOns.filter((x) => x !== id)
				: [...prev.addOns, id],
		}))

	const goBack = () => setStep((prev) => Math.max(1, prev - 1))

	const goForward = () => {
		if (step === 1) {
			const errors = validateStepOne(formData)
			setStepOneErrors(errors)
			if (Object.keys(errors).length === 0) setStep(2)
			return
		}
		if (step === 2 && formData.plan.length === 0) return
		setStep((prev) => prev + 1)
	}

	const value = useMemo(
		() => ({
			step,
			formData,
			isYearly,
			stepOneErrors,
			setStep,
			setFormData,
			setIsYearly,
			setStepOneErrors,
			toggleYearly,
			updateField,
			selectPlan,
			toggleAddOn,
			goBack,
			goForward,
			goToPlanStep: () => setStep(2),
		}),
		[step, formData, isYearly, stepOneErrors],
	)

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useFormContext = () => {
	const ctx = useContext(FormContext)
	if (!ctx) throw new Error('useFormContext must be used inside FormProvider')
	return ctx
}

