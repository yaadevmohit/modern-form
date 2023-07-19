import './index.css'

const colors = {
    marineBlue: "hsl(213, 96%, 18%)",
    lightGray: "hsl(229, 24%, 87%)",
    coolGray: "hsl(231, 11%, 63%)",
    white: "hsl(0, 0%, 100%)"
  
  }
  
const StepInfo = ({heading, about}) => {
  
      const styles = {
        headingInfo: {
          marginBottom: "8px",
          font: "32px",
          fontFamily: "Ubuntu-Bold",
          color: colors.marineBlue
        },
        aboutInfo: {
          color: colors.coolGray, 
          fontFamily: "Ubuntu-Medium", 
          fontSize: "16px"
        }
      }
    return (
      <div >
        <h2 style={styles.headingInfo}>{heading}</h2>
        <span style={styles.aboutInfo}>{about}</span>
      </div>
    )
  }

  export default StepInfo