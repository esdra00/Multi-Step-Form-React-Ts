import {Field} from "formik";
import {useState} from "react";
import {DataFormState} from "../../form";
import advanced from "../../../../assets/images//icon-advanced.svg";
import arcade from "../../../../assets/images//icon-arcade.svg";
import pro from "../../../../assets/images//icon-pro.svg";
import style from "./step2Style.module.scss";

type PlanProps = {plan_name: string; price: string; icon: any};

export default function Step2(props: {data: DataFormState}) {
	const [isYearly, setIsYearly] = useState(false);
	const data = props.data;

	const Plan = ({plan_name, price, icon}: PlanProps) => {
		return (
			<>
				<label htmlFor="plan">
					<div className={style.plan}>
						<Field type="radio" value={plan_name} name="plan" />
						<div className={style.icon}>
							<img src={icon} alt="plan icon" />
						</div>
						<div className={style.plan_info}>
							{plan_name}
							<span className={style.plan_price}>{price}</span>
							{isYearly ? (
								<span className={style.optional}>
									2 months free
								</span>
							) : null}
						</div>
					</div>
				</label>
			</>
		);
	};

	return (
		<>
			<h1 className={style.title}>
				Select your plan
				<span className={style.subTitle}>
					You have the option of monthly or yearly billing.
				</span>
			</h1>
			<div className={style.plans_w}>
				<Plan
					plan_name="Arcade"
					price={data.isYearly ? "$9/mo" : "$90/yr"}
					icon={arcade}
				/>
				<Plan
					plan_name="Advanced"
					price={data.isYearly ? "$12/mo" : "$120/yr"}
					icon={advanced}
				/>
				<Plan
					plan_name="Pro"
					price={data.isYearly ? "$15/mo" : "$150/yr"}
					icon={pro}
				/>
			</div>
			<label htmlFor="isYearly" className={style.frame}>
				<span className={`${!isYearly ? style.active : ""}`}>Monthly</span>
				<span className={style.switch_button}>
					<Field
						name="isYearly"
						type="checkbox"
						// value={isYearly}
						onClick={() => {
							setIsYearly(!isYearly);
						}}
					/>
					<span className={style.slider}></span>
				</span>
				<span className={`${isYearly ? style.active : ""}`}>Yearly</span>
			</label>
		</>
	);
}
