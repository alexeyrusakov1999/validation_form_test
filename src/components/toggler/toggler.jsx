import "../../App.css";

const Toggler = ({ formData, handleChange }) => {
  return (
    <div className="toggler-wrapper">
      <label className="toggler-wrapper style-11">
        <input
          type="checkbox"
          name="toggleValue"
          onChange={handleChange}
          checked={formData.toggleValue}
        />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>
    </div>
  );
};

export { Toggler };
