import submittedIcon from "../../../../assets/images/icon-thank-you.svg";
import style from "./submittedStyle.module.scss";

export default function Submitted() {
	return (
		<>
			<div className={style.wrap}>
				<img src={submittedIcon} height={80} width={80}></img>
				<div className={style.title}>Thank you!</div>
				<div className={style.subTitle}>
					Thanks for confirming your subscription! We hope you have fun using our
					platform. If you ever need support, please feel free to email us at
					support@loremgaming.com.
				</div>
			</div>
		</>
	);
}
