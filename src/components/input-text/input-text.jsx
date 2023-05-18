import "../../App.css";
import { useState, useEffect } from "react";

const InputText = ({ formData, handleChange, setIsValidText, isValidText }) => {
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [isInputActivated, setIsInputActivated] = useState(false);

  const handleFocus = () => {
    setIsActiveInput(true);

    if (!isInputActivated) {
      setIsInputActivated(true);
    }
  };

  const handleBlur = () => {
    setIsActiveInput(false);
  };

  useEffect(() => {
    const text = formData.inputTextLabel;
    const isValidText = text.length > 0 && text.length < 100;
    setIsValidText(isValidText);
  }, [formData.inputTextLabel, setIsValidText]);

  const handleInputChange = (event) => {
    handleChange(event);
  };
  return (
    <div
      className={`input_box input_text ${
        isActiveInput
          ? "input_active"
          : isValidText
          ? ""
          : isInputActivated
          ? "input_error"
          : ""
      }`}
    >
      <label htmlFor="text">Input Text Label</label>
      <input
        id="text"
        name="inputTextLabel"
        placeholder="Enter text"
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={formData.inputTextLabel}
        onChange={handleInputChange}
      />
      <span>Error message informing me of a problem</span>
    </div>
  );
};

export { InputText };
