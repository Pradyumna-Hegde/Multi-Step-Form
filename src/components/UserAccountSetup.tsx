import FormWrapper from "./FormWrapper";

const UserAccountSetup = () => {
  return (
    <FormWrapper title="User Account Setup">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" id="email" className="form-control" />
        <div className="form-text">required *</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" id="password" className="form-control" />
        <div className="form-text">required *</div>
      </div>
    </FormWrapper>
  );
};

export default UserAccountSetup;
