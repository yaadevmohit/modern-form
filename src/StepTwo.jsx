import React, { useState } from 'react'
import './assets/fonts/Ubuntu-Bold.ttf'
import Option from './Option'
import StepInfo from './StepInfo'
import data from "./assets/formData"

// const optionsData = {
//     Arcade: {
//         name: "Arcade",
//         logo: arcadeSvg,
//         moPrice: "$9/mo",
//         yrPrice: "$99/yr",
//     },
//     Advanced: {
//         name: "Advanced",
//         logo: advancedSvg,
//         moPrice: "$12/mo",
//         yrPrice: "$120/yr",
//     },
//     Pro: {
//         name: "Pro",
//         logo: proSvg,
//         moPrice: "$15/mo",
//         yrPrice: "$150/yr",
//     }
// }

const optionsData = data.stepTwoOptions

const StepTwo = () => {

    const [isYearly, setIsYearly] = useState(false);
    
    const options = optionsData.map(option => {
        return (
            <div className='option-container'>
                <input type="radio" name={option.id} value={option.name}  />    
                <img src={option.logo}/>
                <label className='option' htmlFor={option.id}>
                    {option.name}
                    <span>{isYearly ? option.yrPrice : option.moPrice}</span>
                </label>
                {isYearly && <span>2 Months free</span>}
            </div>
            )
    })
    function handleToggle() {
        setIsYearly(!isYearly)
    }
    return(
        <>  
            <StepInfo heading="Select your plan" about="You have the option of monthly or yearly billing."/>
           {options}
            <div className='interval-toggle'>
                <span>Monthly</span>
                <label className='switch'>
                    <input type="checkbox" onChange={handleToggle}/>
                    <span className='slider'></span>
                </label>
                <span>Yearly</span>
            </div>
        </>
    )

}

export default StepTwo