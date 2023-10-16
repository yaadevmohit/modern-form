import thankYouSvg from './assets/images/icon-thank-you.svg'

export default function ThankYou() {
	return (
		<div className="ty-container">
			<img src={thankYouSvg} />
			<h1>Thank you!</h1>
			<p>
				Thank you for confirming your subscription! We hope you have fun using
				our platform. If you even need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	)
}
