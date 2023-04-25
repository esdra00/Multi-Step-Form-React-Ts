import {useField} from "formik";
import style from "./step1Style.module.scss";

const TextInput = ({label, ...props}: {label: any; [x: string]: any}) => {
	const [field, meta] = useField(props as any);

	return (
		<label htmlFor={props.id || props.name}>
			<div className={style.label}>
				{label}
				{meta.touched && meta.error ? (
					<span className={style.error}>{meta.error}</span>
				) : null}
			</div>
			<input {...field} {...props} />
		</label>
	);
};

export default function Step1() {
	return (
		<>
			<h1 className={style.title}>
				Personal Info
				<span className={style.subTitle}>
					Please provide your name, email address, and phone number.
				</span>
			</h1>
			<TextInput
				label="Name"
				name="name"
				type="text"
				placeholder="e.g. Stephen King"
			/>
			<TextInput
				label="Email Address"
				name="email"
				type="email"
				placeholder="e.g. stephenking@lorem.com"
			/>
			<TextInput
				label="Phone Number"
				name="number"
				type="text"
				placeholder="e.g. +1 234 567 890"
			/>
		</>
	);
}
