import React from "react";
import SubHeader from "../header/SubHeader";
import InputFormBusinessInfo from "./subform/InputFormBusinessInfo";
import InputFormLenderParams from "./subform/InputFormLenderParams";

const InputForm = props => {
  const calculateResult = event => {
    event.preventDefault();
    this.props.history.push(`/result`);
  };

  return (
    <form onSubmit={calculateResult}>
      <div className="p-3 mb-2 bg-info text-white">
        <SubHeader subTitleLine="BUSINESS INFORMATION" />
      </div>
      <InputFormBusinessInfo
        sectorData={props.sectorData}
        zoneData={props.zoneData}
        updateSectorCode={props.updateSectorCode}
      />
      <div className="p-3 mb-2 bg-info text-white">
        <SubHeader subTitleLine="LENDER PARAMETERS" />
      </div>
      <InputFormLenderParams />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default InputForm;
