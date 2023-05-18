import "../../App.css";
import { SingleRadio } from "./single-radio";
import { useEffect } from "react";

const RadioSelection = ({ formData, handleChange, setIsValidRadio }) => {
  useEffect(() => {
    const radio = formData.radioSelection;
    const isValidRadio = radio !== "";
    setIsValidRadio(isValidRadio);
  }, [formData.radioSelection, setIsValidRadio]);

  const handleRadioChange = (event) => {
    handleChange(event);
  };
  return (
    <div className="input_radio">
      <SingleRadio
        formData={formData}
        handleChange={handleRadioChange}
        value={"Radio Selection 1"}
      />
      <SingleRadio
        formData={formData}
        handleChange={handleRadioChange}
        value={"Radio Selection 2"}
      />
      <SingleRadio
        formData={formData}
        handleChange={handleRadioChange}
        value={"Radio Selection 3"}
      />
    </div>
  );
};

export { RadioSelection };
