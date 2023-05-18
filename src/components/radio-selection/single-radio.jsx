import "../../App.css";

const SingleRadio = ({ formData, handleChange, value }) => {
  return (
    <div className="input_radio">
      <div className="radio">
        <label className="custom-radio">
          <input
            type="radio"
            name="radioSelection"
            value={value}
            onChange={handleChange}
            checked={formData.radioSelection === value}
          />
          <span>{value}</span>
        </label>
      </div>
    </div>
  );
};

export { SingleRadio };
