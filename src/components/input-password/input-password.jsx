import "../../App.css";
import { useState, useEffect } from "react";

const InputPassword = ({
  formData,
  handleChange,
  isValidPassword,
  setIsValidPassword,
}) => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };

  useEffect(() => {
    const trimmedValue = formData.password.trim();
    const isValidPassword = trimmedValue.length > 4 && trimmedValue.length < 12;
    setIsValidPassword(isValidPassword);
  }, [formData.password, setIsValidPassword]);

  const handleInputChange = (event) => {
    handleChange(event);
  };

  return (
    <div
      className={`input_box input_password ${
        isActiveInput ? "input_active" : isValidPassword ? "" : "input_error"
      }`}
    >
      <label htmlFor="password">Password</label>
      <input
        className={isActiveInput ? "active_input" : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
        placeholder="Enter password"
        type="text"
      />
      <span>Your password is between 4 and 12 characters</span>
    </div>
  );
};

export { InputPassword };
