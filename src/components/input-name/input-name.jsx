import "../../App.css";
import { useState, useEffect } from "react";

const InputName = ({
  formData,
  handleChange,
  isValidUsername,
  setIsValidUsername,
}) => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };

  useEffect(() => {
    const trimmedValue = formData.username.trim();
    const isValidUsername = trimmedValue.length > 0;
    setIsValidUsername(isValidUsername);
  }, [formData.username, setIsValidUsername]);

  const handleInputChange = (event) => {
    handleChange(event);
  };

  return (
    <div
      className={`input_box input_username ${
        isActiveInput ? "input_active" : isValidUsername ? "" : "input_error"
      }`}
    >
      <label htmlFor="username">Username</label>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        id="username"
        name="username"
        placeholder="Enter username"
        type="text"
        value={formData.username}
      />
      {isValidUsername ? "" : <span>Enter your name</span>}
    </div>
  );
};

export { InputName };
