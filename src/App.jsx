import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { InputName } from "./components/input-name/input-name";

function App() {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    inputTextLabel: "",
    rememberMe: false,
    toggleValue: false,
    radioSelection: "",
    dropdownValue: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className="box">
      <form action="" className="container" onSubmit={handleSubmit}>
        <InputName formData={formData} handleChange={handleChange} />
        <div className="input_box input_password">
          <label htmlFor="password">Password</label>
          <input
            className={isActiveInput ? "active_input" : ""}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={formData.password}
            onChange={handleChange}
            id="password"
            name="password"
            placeholder="Enter password"
            type="text"
          />
          <span>Your password is between 4 and 12 characters</span>
        </div>

        <div className="input_box input_text">
          <label htmlFor="text">Input Text Label</label>
          <input
            id="text"
            name="inputTextLabel"
            placeholder="Enter text"
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className="checkbox">
          <label htmlFor="remember" className="custom-checkbox">
            <input
              id="remember"
              type="checkbox"
              name="rememberMe"
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>
        </div>
        <div className="toggler-wrapper">
          <label className="toggler-wrapper style-11">
            <input type="checkbox" name="toggleValue" onChange={handleChange} />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </div>

        <div className="input_radio">
          <div className="radio">
            <label className="custom-radio">
              <input
                type="radio"
                name="radio"
                value="radio1"
                onChange={handleChange}
                checked={formData.radioSelection === "radio1"}
              />
              <span>Radio selection 1</span>
            </label>
          </div>
          <div className="radio">
            <label className="custom-radio">
              <input
                type="radio"
                name="radio"
                value="radio2"
                onChange={handleChange}
                checked={formData.radioSelection === "radio2"}
              />
              <span>Radio selection 2</span>
            </label>
          </div>
          <div className="radio">
            <label className="custom-radio">
              <input
                type="radio"
                name="radioSelection"
                value="radio3"
                onChange={handleChange}
                checked={formData.radioSelection === "radio3"}
              />
              <span>Radio selection 3</span>
            </label>
          </div>
        </div>

        <div className="option-box">
          <span>Dropdown Title</span>
          <input
            value="Dropdown option"
            type="text"
            id="option"
            name="dropdownValue"
            className="opacity-input"
          />

          <div className="option">Dropdown option</div>
          <div className="option-case">
            <div className="option-case_1 active">Dropdown option</div>
            <div className="option-case_2">Dropdown option 1</div>
            <div className="option-case_3">Dropdown option 2</div>
          </div>
        </div>

        <div className="botton-box">
          <button className="cancel btn">Cancel</button>
          <button className="next btn " type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
