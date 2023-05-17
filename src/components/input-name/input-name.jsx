import "../../App.css";
import { useState } from "react";

const InputName = ({ formData, handleChange }) => {
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };
  return (
    <div className="input_box input_username input_error">
      <label htmlFor="username">Username</label>
      <input
        className={isActiveInput ? "active_input" : ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        id="username"
        name="username"
        placeholder="Enter username"
        type="text"
        value={formData.username}
      />
    </div>
  );
};

export { InputName };
