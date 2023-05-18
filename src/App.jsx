import "./App.css";
import { useState, useEffect } from "react";
import { InputName } from "./components/input-name/input-name";
import { InputPassword } from "./components/input-password/input-password";
import { InputText } from "./components/input-text/input-text";
import { CheckboxRemember } from "./components/checkbox-remember/checkbox-remember";
import { Toggler } from "./components/toggler/toggler";
import { RadioSelection } from "./components/radio-selection/radio-selection";
import { Dropdown } from "./components/dropdown/dropdown";
import { Button } from "./components/button/button";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    inputTextLabel: "",
    rememberMe: false,
    toggleValue: false,
    radioSelection: "",
    dropdownValue: "",
  });

  const [isButtonValid, setIsButtonValid] = useState(false);

  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidText, setIsValidText] = useState(false);
  const [isValidRadio, setIsValidRadio] = useState(false);
  const [isValidDropdown, setIsValidDropdown] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    const isValid =
      isValidUsername &&
      isValidPassword &&
      isValidText &&
      isValidRadio &&
      isValidDropdown;
    setIsButtonValid(isValid);
  }, [
    isValidUsername,
    isValidPassword,
    isValidText,
    isValidRadio,
    isValidDropdown,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div className="box">
      <form action="" className="container" onSubmit={handleSubmit}>
        <InputName
          formData={formData}
          handleChange={handleChange}
          isValidUsername={isValidUsername}
          setIsValidUsername={setIsValidUsername}
        />
        <InputPassword
          formData={formData}
          handleChange={handleChange}
          isValidPassword={isValidPassword}
          setIsValidPassword={setIsValidPassword}
        />
        <InputText
          formData={formData}
          handleChange={handleChange}
          isValidText={isValidText}
          setIsValidText={setIsValidText}
        />
        <CheckboxRemember formData={formData} handleChange={handleChange} />
        <Toggler formData={formData} handleChange={handleChange} />
        <RadioSelection
          formData={formData}
          handleChange={handleChange}
          setIsValidRadio={setIsValidRadio}
        />
        <Dropdown
          formData={formData}
          handleChange={handleChange}
          setIsValidDropdown={setIsValidDropdown}
          isValidDropdown={isValidDropdown}
        />

        <div className="botton-box">
          <Button className="cancel btn" type="button" title="Cancel" />
          <Button
            className={`next btn ${isButtonValid ? "" : "disabled"}`}
            type="submit"
            title="Next"
            disabled={!isButtonValid}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
