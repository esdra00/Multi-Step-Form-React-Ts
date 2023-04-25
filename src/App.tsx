import {createContext, useContext, useState} from "react";
import Form_c from "./components/Form/form";
import SideBar from "./components/sidebar";
import style from "./App.module.scss";

interface StepContextType {
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepContext = createContext({} as StepContextType);

export const useGlobalContext = () => useContext(StepContext);

function App() {
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<>
			<div className={style.container}>
				<StepContext.Provider value={{currentStep, setCurrentStep}}>
					<SideBar />
					<Form_c />
				</StepContext.Provider>
			</div>
		</>
	);
}

export default App;
