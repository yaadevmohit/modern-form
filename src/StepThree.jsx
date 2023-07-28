import Option from './Option'
import StepInfo from './StepInfo'
const StepThree = () => {
    return(
        <>
            <StepInfo heading="Pick add-ons" about="Add-ons help enhance your gaming experience"/>
            <Option type="checkbox" inputName="Online service" nameDetail="Access to multiplayer games">
                <span>+$10/yr</span>
            </Option>
            <Option type="checkbox" inputName="Online service" nameDetail="Access to multiplayer games">
                <span>+$10/yr</span>
            </Option>
            <Option type="checkbox" inputName="Online service" nameDetail="Access to multiplayer games">
                <span>+$10/yr</span>
            </Option>
        </>
    )
}

export default  StepThree
