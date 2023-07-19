import React from 'react'
import './assets/fonts/Ubuntu-Bold.ttf'
import arcadeSvg from './assets/images/icon-arcade.svg'
import advancedSvg from './assets/images/icon-advanced.svg'
import proSvg from './assets/images/icon-pro.svg'
import './App.css'


const Option = ({inputName, priceMo, priceYr, logo}) => {

    const styles = {
        
        option: {
            display: "flex",
            fontSize: "28px",
            flexFlow: "column wrap"

        },
        input: {
            display: "None",
        }
    }

    return(
        <div className='optionContainer'>
            <img src={logo}/>
            <label className='option' >
                <input type="radio" id="option1" name="options" value="option1"  />
                {inputName}
                <span>{priceMo}</span>
            </label>
        </div>
    )
}


const StepTwo = () => {
    return(
        <>
            <Option inputName="Arcade" logo={arcadeSvg} priceMo="$9/mo"/>
            <Option inputName="Advanced" logo={advancedSvg} priceMo="$12/mo"/>
            <Option inputName="Pro" logo={proSvg} priceMo="$15/mo"/>
        </>
    )

}

export default StepTwo