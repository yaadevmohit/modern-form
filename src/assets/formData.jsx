import arcadeSvg from './images/icon-arcade.svg'
import advancedSvg from './images/icon-advanced.svg'
import proSvg from './images/icon-pro.svg'

export default {
	formSteps: [
		{
			step: 1,
			name: 'STEP 1',
			info: 'YOUR INFO',
		},

		{
			step: 2,
			name: 'STEP 2',
			info: 'SELECT PLAN',
		},

		{
			step: 3,
			name: 'STEP 3',
			info: 'ADD-ONS',
		},

		{
			step: 4,
			name: 'STEP 4',
			info: 'SUMMARY',
		},
	],

	stepOneInputs: [
		{
			name: 'Name',
			type: 'text',
			placeholder: 'e.g. stephen king',
			id: 'name',
		},

		{
			name: 'Email Address',
			type: 'email',
			placeholder: 'e.g. anexample@example.com',
			id: 'email',
		},

		{
			name: 'Phone Number',
			type: 'tel',
			placeholder: '+123456789',
			id: 'phone',
		},
	],

	stepTwoOptions: [
		{
			name: 'Arcade',
			logo: arcadeSvg,
			moPrice: 9,
			yrPrice: 99,
			isChecked: false,
			id: 'arcade',
		},

		{
			name: 'Advanced',
			logo: advancedSvg,
			moPrice: 12,
			yrPrice: 120,
			isChecked: false,
			id: 'advanced',
		},

		{
			name: 'Pro',
			logo: proSvg,
			moPrice: 15,
			yrPrice: 150,
			isChecked: false,
			id: 'pro',
		},
	],
	stepThreeOptions: [
		{
			name: 'Online service',
			info: 'Access to multiplayer games',
			moPrice: 1,
			id: 'online_service',
			yrPrice: 10,
		},

		{
			name: 'Larger storage',
			info: 'Extra 1TB of cloud save',
			moPrice: 2,
			id: 'lrg_storage',
			yrPrice: 20,
		},

		{
			name: 'Customizable profile',
			info: 'Custom theme on your profile',
			moPrice: 2,
			id: 'custom_profile',
			yrPrice: 20,
		},
	],
}
