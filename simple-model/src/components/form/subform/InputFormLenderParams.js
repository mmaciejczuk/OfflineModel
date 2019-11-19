import React, { Fragment } from "react";

const InputFormLenderParams = props => {
  // dscr//ref = React.create//ref();
  // tenure//ref = React.create//ref();
  // existingDebtTenure//ref = React.create//ref();
  // termLoanInterestRate//ref = React.create//ref();
  // workingCapInterestRate//ref = React.create//ref();
  // loanStress//ref = React.create//ref();
  // benchmarkGrowthRate//ref = React.create//ref();
  // benchmarkNOI//ref = React.create//ref();

  return (
    <Fragment>
      <div className="form-group row">
        <label htmlFor="dscr" className="col-sm-3 col-form-label">
          DSCR
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            //ref={this.dscr}
            placeholder="DSCR"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="tenure" className="col-sm-3 col-form-label">
          Tenure
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            //ref={this.tenure}
            placeholder="Tenure"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="existingDebtTenure" className="col-sm-3 col-form-label">
          Existing Debt Tenure
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            className="form-control"
            //ref={this.existingDebtTenure}
            placeholder="Existing Debt Tenure"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="termLoanInterestRate"
          className="col-sm-3 col-form-label"
        >
          Term Loan Interest Rate
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            //ref={this.termLoanInterestRate}
            placeholder="Term Loan Interest Rate"
            pattern="^[0-9]{1,2}((,|\.)[0-9]{1,10})?%?$"
            onfocusout="percentage()"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="workingCapInterestRate"
          className="col-sm-3 col-form-label"
        >
          Working Cap Interest Rate
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            //ref={this.workingCapInterestRate}
            placeholder="Working Cap Interest Rate"
            pattern="^[0-9]{1,2}((,|\.)[0-9]{1,10})?%?$"
            onfocusout="percentage()"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="loanStress" className="col-sm-3 col-form-label">
          Loan Stress %
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            //ref={this.loanStress}
            placeholder="Loan Stress %"
            pattern="^[0-9]{1,2}((,|\.)[0-9]{1,10})?%?$"
            onfocusout="percentage()"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="benchmarkGrowthRate"
          className="col-sm-3 col-form-label"
        >
          Benchmark Growth Rate
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            //ref={this.benchmarkGrowthRate}
            placeholder="Benchmark Growth Rate"
            readOnly
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="benchmarkNOI" className="col-sm-3 col-form-label">
          Benchmark NOI
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            //ref={this.benchmarkNOI}
            placeholder="Benchmark NOI"
            readOnly
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InputFormLenderParams;
