import React from 'react'
import './assets/fonts/Ubuntu-Bold.ttf'
import arcadeSvg from './assets/images/icon-arcade.svg'
import advancedSvg from './assets/images/icon-advanced.svg'
import proSvg from './assets/images/icon-pro.svg'
import './App.css'
import Option from './Option'



const StepTwo = () => {
    return(
        <>
            <Option inputName="Arcade" logo={arcadeSvg} nameDetail="$9/mo" type="radio"/>
            <Option inputName="Advanced" logo={advancedSvg} nameDetail="$12/mo" type="radio"/>
            <Option inputName="Pro" logo={proSvg} nameDetail="$15/mo" type="radio"/>
        </>
    )

}

export default StepTwo