import React from 'react'
import './assets/fonts/Ubuntu-Bold.ttf'
const Option = () => {

    const styles = {
        
        optionContainer: {
            width: "100%",
            border: "Solid black",
            margin: "10px 0px"
        }
        ,
        
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
        <div style={styles.optionContainer}>
            <label style={styles.option} > 
                <input type="radio" id="option1" name="options" value="option1" style={styles.input} />
                Arcade
                <span>$9/mo.</span>
            </label>
        </div>
    )
}


const StepTwo = () => {
    return(
        <>
            <Option />
            <Option />
        </>
    )

}

export default StepTwo