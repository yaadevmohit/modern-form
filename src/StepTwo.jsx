import React, { useState } from 'react'
import './assets/fonts/Ubuntu-Bold.ttf'
import arcadeSvg from './assets/images/icon-arcade.svg'
import advancedSvg from './assets/images/icon-advanced.svg'
import proSvg from './assets/images/icon-pro.svg'
import './App.css'
import Option from './Option'

const options = {
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
        yrPrice: "$120/",
    }

}



const StepTwo = ( {options} ) => {

    const [isYearly, setIsYearly] = useState(false);

    function handleToggle() {
        setIsYearly(!isYearly)
    }

    return(
        <>  
            {Object.values(options.map((option, index) =>(
                    <>
                    <Option 
                            key={index}
                            inputName={option.name}
                            logo={option.log}
                            nameDetail={isYearly ? option.yrPrice : option.moPrice}
                            type="radio"
                        />
                    </>
                    
                ))
            
            )}
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