import React, { useState } from 'react'
import './assets/fonts/Ubuntu-Bold.ttf'
import arcadeSvg from './assets/images/icon-arcade.svg'
import advancedSvg from './assets/images/icon-advanced.svg'
import proSvg from './assets/images/icon-pro.svg'
import './App.css'
import Option from './Option'

const optionsData = {
    Arcade: {
        name: "Arcade",
        logo: arcadeSvg,
        moPrice: "$9/mo",
        yrPrice: "$100/yr",
    },
    Advanced: {
        name: "Advanced",
        logo: advancedSvg,
        moPrice: "$12/mo",
        yrPrice: "$120/yr",
    },
    Pro: {
        name: "Pro",
        logo: proSvg,
        moPrice: "$12/mo",
        yrPrice: "$120/yr",
    }
}

const StepTwo = () => {

    const [isYearly, setIsYearly] = useState(false);
    
    function handleToggle() {
        setIsYearly(!isYearly)
    }
    return(
        <>  
            <Option inputName={optionsData.Arcade.name} logo={optionsData.Arcade.logo} nameDetail={isYearly ? optionsData.Arcade.yrPrice : optionsData.Arcade.moPrice} type="radio"/>
            <Option inputName={optionsData.Advanced.name} logo={optionsData.Advanced.logo} nameDetail={isYearly ? optionsData.Advanced.yrPrice : optionsData.Advanced.moPrice} type="radio"/>
            <Option inputName={optionsData.Pro.name} logo={optionsData.Arcade.logo} nameDetail={isYearly ? optionsData.Pro.yrPrice : optionsData.Pro.moPrice} type="radio"/>
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