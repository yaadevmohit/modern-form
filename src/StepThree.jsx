import React, { useState } from 'react'
import data from "./assets/formData"
import StepInfo from './StepInfo'

const optionsData = data.stepThreeOptions

const StepThree = ({yearly}) => {

    const options = optionsData.map(option => {
        return(
            <div className='option-container-three' key={option.id}>
                <input type="checkbox" name={option.id} value={option.name}  />    
                <img src={option.logo}/>
                <label className='option' htmlFor={option.id}>
                    {option.name}
                    <span>{option.info}</span>
                </label>
                <span className='add-price'>{yearly ? option.yrPrice : option.price}</span>
            </div>
        )
    })
    return(
        <>
            <StepInfo heading="Pick add-ons" about="Add-ons help enhance your gaming experience."/>
            {options}
        </>
    )
}

export default  StepThree
