import arcadeSvg from './images/icon-arcade.svg'
import advancedSvg from './images/icon-advanced.svg'
import proSvg from './images/icon-pro.svg'
export default {
    formSteps: [
        {
            key: 1,
            name: "STEP 1",
            info: "YOUR INFO"
        },

        {
            key: 2,
            name: "STEP 2",
            info: "SELECT PLAN"
        },

        {
            key: 3,
            name: "STEP 3",
            info: "ADD-ONS"
        },

        {
            key: 4,
            name: "STEP 4",
            info: "SUMMARY"
        }
    ],

    stepOneInputs: [
        {name: "Name",
         type: "text",
         placeholder: "e.g. stephen king",
         id: "name"
        },  

        {name: "Email Address",
        type: "email",
        placeholder: "e.g. anexample@example.com",
        id: "email"
        },

        {name: "Phone Number",
        type: "tel",
        placeholder: "+123456789",
        id: "phone"
        }
    ],

    stepTwoOptions: [
        {
            name: "Arcade",
            logo: arcadeSvg,
            moPrice: "$9/mo",
            yrPrice: "$99/yr",
            isChecked: false,
            id:"arcade"
        },

        {
            name: "Advanced",
            logo: advancedSvg,
            moPrice: "$12/mo",
            yrPrice: "$120/yr",
            isChecked: false,
            id:"advanced"
        },

        {
            name: "Pro",
            logo: proSvg,
            moPrice: "$15/mo",
            yrPrice: "$150/yr",
            isChecked: false,
            id: "pro"
        },
    ],
    stepThreeOptions: [
        {
            name: "Online service",
            info: "Access to multiplayer games",
            price: "+$1/mo",
            id:"online_service",
            yrPrice: "+$10/yr"
        },

        {
            name: "Larger storage",
            info: "Extra 1TB of cloud save",
            price: "+$2/mo",
            id:"lrg_storage",
            yrPrice: "+$20/yr"
        },

        {
            name: "Customizable profile",
            info: "Custom theme on your profile",
            price: "+$2/mo",
            id:"custom_profile",
            yrPrice: "+$20/yr"
        }
    ]
}