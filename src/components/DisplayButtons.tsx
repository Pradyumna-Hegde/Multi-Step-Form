interface Props {
  isFirstStep: boolean;
  isLastStep: boolean;
  next: () => void;
  prev: () => void;
}

const DisplayButtons = ({ isFirstStep, isLastStep, next, prev }: Props) => {
  return (
    <div className="mt-5">
      {!isFirstStep && (
        <button type="button" className="mx-3 btn btn-secondary" onClick={prev}>
          prev
        </button>
      )}

      {!isLastStep ? (
        <button type="button" className="mx-3 btn btn-secondary" onClick={next}>
          next
        </button>
      ) : (
        <button type="button" className="mx-3 btn btn-success">
          Finish and Submit
        </button>
      )}
    </div>
  );
};

export default DisplayButtons;
