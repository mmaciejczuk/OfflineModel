import React, { Component } from "react";
import SubHeader from "../header/SubHeader";
import InputFormBusinessInfo from "./subform/InputFormBusinessInfo";
import InputFormLenderParams from "./subform/InputFormLenderParams";

class InputForm extends Component {
  constructor() {
    super();
    this.calculateResult = this.calculateResult.bind(this);
  }

  calculateResult = event => {
    event.preventDefault();
    this.props.history.push(`/result`);
  };

  render() {
    return (
      <form onSubmit={this.calculateResult}>
        <div className="p-3 mb-2 bg-info text-white">
          <SubHeader subTitleLine="BUSINESS INFORMATION" />
        </div>
        <InputFormBusinessInfo
          sectorData={this.props.sectorData}
          zoneData = {this.props.zoneData}
          updateSectorCode = {this.props.updateSectorCode}
        />
        <div className="p-3 mb-2 bg-info text-white">
          <SubHeader subTitleLine="LENDER PARAMETERS" />
        </div>
        <InputFormLenderParams
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.props.loadFormData}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default InputForm;
