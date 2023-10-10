import DisplayButtons from "./components/DisplayButtons";
import DisplayStep from "./components/DisplayStep";
import UserAccountSetup from "./components/UserAccountSetup";
import UserAddress from "./components/UserAddress";
import UserDetails from "./components/UserDetails";
import useMultiStepForm from "./custom-hooks/useMultiStepForm";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const { currentStepIndex, steps, step, isFirstStep, isLastStep, prev, next } =
    useMultiStepForm([<UserDetails />, <UserAddress />, <UserAccountSetup />]);

  return (
    <div className="m-5 border p-5">
      <DisplayStep steps={steps} currentStepIndex={currentStepIndex} />
      {step}
      <DisplayButtons
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        next={next}
        prev={prev}
      />
    </div>
  );
}

export default App;
