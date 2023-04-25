import {Field} from "formik";
import {useState} from "react";
import {DataFormState} from "../../form";
import iconCheck from "../../../../assets/images/icon-checkmark.svg";
import style from "./step3Style.module.scss";

type OptionProps = {
	title: string;
	name: string;
	desc: string;
	check: boolean;
};

const Option = ({title, name, desc, check}: OptionProps) => {
	const [option, setOption] = useState(check);

	return (
		<label
			htmlFor={name}
			className={`${style.item} ${option ? style.item_check : ""}`}
			onClick={() => {
				setOption(!option);
			}}
		>
			<div className={`${style.icon} ${option ? style.check : ""}`}>
				{option ? <img src={iconCheck}></img> : null}
			</div>
			<div className={style.desc}>
				{title}
				<span>{desc}</span>
			</div>
			<div className={style.price}>+${title == "Online service" ? 1 : 2}/mo</div>
			<Field type="checkbox" value={title} name={name} />
		</label>
	);
};

export default function Step3(props: {data: DataFormState}) {
	return (
		<>
			<h1 className={style.title}>
				Pick add-ons
				<span className={style.subTitle}>
					Add-ons help enhance your gaming experience.
				</span>
			</h1>

			<div className={style.container}>
				<Option
					title="Online service"
					desc="Access to multiplayer games"
					name="isOnlineService"
					check={props.data.isOnlineService}
				/>
				<Option
					title="Larger storage"
					desc="Extra 1TB of cloud save"
					name="isLargerStorage"
					check={props.data.isLargerStorage}
				/>
				<Option
					title="Customizable profile"
					desc="Custom theme on your profile"
					name="isCustomizableProfile"
					check={props.data.isCustomizableProfile}
				/>
			</div>
		</>
	);
}
