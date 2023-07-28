const StepInfo = ({heading, about, step}) => {
    return (
      <div >
        <h2 className='heading-info'>{heading}</h2>
        <span className='about-info'>{about}</span>
      </div>
    )
}

export default StepInfo