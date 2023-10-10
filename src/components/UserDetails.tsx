import FormWrapper from "./FormWrapper";

const UserDetails = () => {
  return (
    <FormWrapper title="User Details">
      <div className="mb-3">
        <label htmlFor="first-name" className="form-label">
          First Name
        </label>
        <input type="text" id="first-name" className="form-control" />
        <div className="form-text">required *</div>
      </div>
      <div className="mb-3">
        <label htmlFor="last-name" className="form-label">
          Last Name
        </label>
        <input type="text" id="last-name" className="form-control" />
        <div className="form-text">required *</div>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input type="number" id="age" className="form-control" />
        <div className="form-text">required *</div>
      </div>
    </FormWrapper>
  );
};

export default UserDetails;
