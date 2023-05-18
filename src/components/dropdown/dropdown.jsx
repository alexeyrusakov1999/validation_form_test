import "../../App.css";
import { useState, useEffect } from "react";

const Dropdown = ({
  formData,
  handleChange,
  setIsValidDropdown,
  isValidDropdown,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Dropdown option");

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const radio = formData.dropdownValue;
    const isValidDropdown = radio !== "";
    setIsValidDropdown(isValidDropdown);
  }, [formData.dropdownValue, setIsValidDropdown]);

  //   const handleDropdownChange = (event) => {
  //     handleChange(event);
  //   };
  return (
    <div className="option-box">
      <span>Dropdown Title</span>
      <input
        value={formData.dropdownValue}
        onChange={handleChange}
        type="text"
        id="option"
        name="dropdownValue"
        className="opacity-input"
      />

      <div
        className={`option ${isOpen ? "option-active" : ""}`}
        onClick={handleDropdownClick}
      >
        {selectedOption}
      </div>
      <div
        className={isOpen ? "option-case-open option-active" : "option-case"}
      >
        <div
          className={
            selectedOption === "Dropdown option"
              ? "option-case_1 active"
              : "option-case_1"
          }
          onClick={() => {
            handleOptionClick("Dropdown option");
            handleChange({
              target: { name: "dropdownValue", value: "Dropdown option" },
            });
          }}
        >
          Dropdown option
        </div>
        <div
          className={
            selectedOption === "Dropdown option 1"
              ? "option-case_2 active"
              : "option-case_2"
          }
          onClick={() => {
            handleOptionClick("Dropdown option 1");
            handleChange({
              target: { name: "dropdownValue", value: "Dropdown option 1" },
            });
          }}
        >
          Dropdown option 1
        </div>
        <div
          className={
            selectedOption === "Dropdown option 2"
              ? "option-case_3 active"
              : "option-case_3"
          }
          onClick={() => {
            handleOptionClick("Dropdown option 2");
            handleChange({
              target: { name: "dropdownValue", value: "Dropdown option 2" },
            });
          }}
        >
          Dropdown option 2
        </div>
      </div>
      {isValidDropdown ? "" : <span>Choose your variant</span>}
    </div>
  );
};

export { Dropdown };
