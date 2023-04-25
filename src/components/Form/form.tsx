import {Form, Formik, FormikProps} from "formik";
import {useState} from "react";
import * as Yup from "yup";
import {useGlobalContext} from "../../App";
import style from "./formStyle.module.scss";
import Submitted from "./Steps/Submitted/submitted";
import Step1 from "./Steps/Step 1/step1";
import Step2 from "./Steps/Step 2/step2";
import Step3 from "./Steps/Step 3/step3";
import Step4 from "./Steps/Step 4/step4";

export interface DataFormState {
	name: string;
	email: string;
	number: string;
	plan: "Arcade" | "Advance" | "Pro";
	isYearly: boolean;
	isOnlineService: boolean;
	isLargerStorage: boolean;
	isCustomizableProfile: boolean;
}

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Form_c() {
	const {currentStep, setCurrentStep} = useGlobalContext();
	const [data, setData] = useState<DataFormState>({
		name: "",
		email: "",
		number: "",
		plan: "Arcade",
		isYearly: false,
		isOnlineService: false,
		isLargerStorage: false,
		isCustomizableProfile: false,
	});

	const handleNextStep = async (newData: DataFormState) => {
		setData((prev) => ({...prev, ...newData}));
		setCurrentStep((prev: number): number => prev + 1);
	};

	const handlePrevStep = async (newData: FormikProps<DataFormState>) => {
		setData((prev) => ({...prev, ...newData}));
		setCurrentStep((prev: number): number => prev - 1);
	};

	const steps = [
		<Step1 />,
		<Step2 data={data} />,
		<Step3 data={data} />,
		<Step4 data={data} />,
		<Submitted />,
	];

	return (
		<>
			<div className={style.container}>
				<div className={style.wrapper}>
					<Formik
						initialValues={data}
						validationSchema={Yup.object({
							name: Yup.string().required("This field is required"),
							email: Yup.string()
								.email()
								.required("This field is required")
								.matches(emailRegExp, "Email is not valid"),
							number: Yup.string()
								.required("This field is required")
								.matches(
									phoneRegExp,
									"Phone number is not valid"
								),
						})}
						onSubmit={handleNextStep}
					>
						{(values: FormikProps<DataFormState>) => (
							<Form>
								<div className={style.form_w}>
									{steps[currentStep]}
								</div>
								{currentStep == 4 ? null : (
									<nav className="nav">
										{currentStep !== 0 ? (
											<button
												type="button"
												onClick={() => {
													handlePrevStep(values);
												}}
											>
												go back
											</button>
										) : null}
										<button type="submit">
											{currentStep == 3
												? "Confirm"
												: "Next"}
										</button>
									</nav>
								)}
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
}
