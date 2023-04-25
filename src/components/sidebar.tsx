import {useGlobalContext} from "../App";
import style from "./sideBarStyle.module.scss";

const Step = ({number, title}: {number: number; title: string}) => {
	const {currentStep} = useGlobalContext();

	return (
		<div className={style.step}>
			<div
				className={`${style.step_number} ${
					number == currentStep ? style.active : ""
				}`}
			>
				{number}
			</div>
			<div className={style.step_name}>
				<span className={style.title_small}>step {number}</span>
				<span className={style.title}>{title}</span>
			</div>
		</div>
	);
};

export default function SideBar() {
	return (
		<>
			<div className={style.container}>
				<Step number={0} title="your info" />
				<Step number={1} title="select plan" />
				<Step number={2} title="add-ons" />
				<Step number={3} title="summary" />
			</div>
		</>
	);
}
