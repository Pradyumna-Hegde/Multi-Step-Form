import FormWrapper from "./FormWrapper";

const UserAddress = () => {
  return (
    <FormWrapper title="User Address">
      <>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input type="text" id="street" className="form-control" />
          <div className="form-text">required *</div>
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" id="city" className="form-control" />
          <div className="form-text">required *</div>
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input type="text" id="state" className="form-control" />
          <div className="form-text">required *</div>
        </div>
      </>
    </FormWrapper>
  );
};

export default UserAddress;
