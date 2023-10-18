// eslint-disable-next-line react/prop-types
const StepInfo = ({ heading, about }) => {
	return (
		<div className="header">
			<h2 className="heading-info">{heading}</h2>
			<span className="about-info">{about}</span>
		</div>
	)
}

export default StepInfo
