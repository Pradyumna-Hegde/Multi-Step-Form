import { ReactElement } from "react";

interface Props {
  steps: ReactElement[];
  currentStepIndex: number;
}

const DisplayStep = ({ steps, currentStepIndex }: Props) => {
  return (
    <div className="mb-5 fs-4 d-flex flex-row-reverse">
      {currentStepIndex + 1} / {steps.length}
    </div>
  );
};

export default DisplayStep;
