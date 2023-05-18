import "../../App.css";

const CheckboxRemember = ({ formData, handleChange }) => {
  return (
    <div className="checkbox">
      <label htmlFor="remember" className="custom-checkbox">
        <input
          id="remember"
          type="checkbox"
          name="rememberMe"
          onChange={handleChange}
          checked={formData.rememberMe}
        />
        <span>Remember me</span>
      </label>
    </div>
  );
};

export { CheckboxRemember };
