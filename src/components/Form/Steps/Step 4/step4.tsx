import {Field} from "formik";
import {DataFormState} from "../../form";
import style from "./step4Style.module.scss";

export default function Step4(props: {data: DataFormState}) {
	const data = props.data;

	console.log(data);
	let price_plan = 9;
	switch (data.plan) {
		case "Advance":
			price_plan = 12;
			break;
		case "Pro":
			price_plan = 15;
			break;
	}

	let add_ons_price = 2;
	switch (data.isOnlineService) {
		case true:
			add_ons_price = 1;
			break;
	}

	data.isYearly == true ? ((add_ons_price *= 10), (price_plan *= 10)) : null;

	const addons = [];
	data.isOnlineService ? addons.push("Online service") : null;
	data.isCustomizableProfile ? addons.push("Customizable profile") : null;
	data.isLargerStorage ? addons.push("Larger storage") : null;

	// export const prices = {
	// 	plan: {
	// 		Arcade: (isYearly: boolean) => (isYearly ? 90 : 9),
	// 		Advanced: (isYearly: boolean) => (isYearly ? 120 : 12),
	// 		Pro: (isYearly: boolean) => (isYearly ? 150 : 15),
	// 	},
	// 	addons: {
	// 		isOnlineService: (isYearly: boolean) => (isYearly ? 10 : 1),
	// 		isLargerStorage: (isYearly: boolean) => (isYearly ? 20 : 2),
	// 		isCustomizableProfile: (isYearly: boolean) => (isYearly ? 20 : 2),
	// 	},
	// };
	// export const formatPrice = (isYearly: boolean, value: number) =>
	// 	isYearly ? `$${value}/yr` : `$${value}/mo`;

	return (
		<>
			<h1 className={style.title}>
				Finishing up
				<span className={style.subTitle}>
					Double-check everything looks OK before confirming.
				</span>
			</h1>
			<div className={style.summary_w}>
				<div className={style.summary}>
					<div className={style.plan}>
						<div>
							{data.plan} ({data.isYearly ? "Yearly" : "Monthly"}){" "}
							<label className={style.isYearly}>
								change
								<Field>
									{(field: any) => (
										<input
											type="checkbox"
											name="isYearly"
											onChange={field.handleChange}
											checked={data.isYearly}
										/>
									)}
								</Field>
							</label>
						</div>
						<span>
							${price_plan}/{data.isYearly ? "yr" : "mo"}
						</span>
					</div>
					<div className={style.line}></div>
					<div className={style.add_ons}>
						{addons.map((i: string) => {
							return (
								<>
									<div>
										{i}
										<span>
											+${add_ons_price}/
											{data.isYearly ? "yr" : "mo"}
										</span>
									</div>
								</>
							);
						})}
					</div>
				</div>
				<div className={style.total}>
					Total per Month{" "}
					<span>
						${price_plan + add_ons_price * addons.length}/
						{data.isYearly ? "yr" : "mo"}
					</span>
				</div>
			</div>
		</>
	);
}
