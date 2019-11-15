import React, { Fragment, Component } from "react";
//import { formatPercentage } from '../helpers';

class InputFormBusinessInfo extends Component {
  businessNameRef = React.createRef();
  businessIDCINRef = React.createRef();
  ownerNameRef = React.createRef();
  ownerEmailRef = React.createRef();
  ownerMobileRef = React.createRef();
  retailWholesaleRef = React.createRef();
  sectorDropDownRef = React.createRef();
  sectorCodeRef = React.createRef();
  stateDropDownRef = React.createRef();
  annualRevenuesRef = React.createRef();
  ownerMobileRef = React.createRef();
  annualGrowthRateAvailableRef = React.createRef();
  annualGrowthRateRef = React.createRef();
  annualProfitMarginRef = React.createRef();
  annualProfitOverwriteRef = React.createRef();
  totalExistingLongTermDebtRef = React.createRef();
  totalExistingWorkingCapitalRef = React.createRef();
  averageAnnualInterestRateRef = React.createRef();
  totalAnnualInterestRef = React.createRef();

  async componentDidMount() {
    
  }  

  // businessInfo = {
  //   businessName: this.businessName.value.value,
  //   businessIDCIN: this.businessIDCIN.value.value,
  //   ownerName: this.ownerName.value.value,
  //   ownerEmail: this.ownerEmail.value.value,
  //   ownerMobile: this.ownerMobile.value.value,
  //   retailWholesale: this.retailWholesale.value.value,
  //   sectorDropDown: this.sectorDropDown.value.value,
  //   sectorCode: this.sectorCode.value.value,
  //   stateDropDown: this.stateDropDown.value.value,
  //   annualRevenues: this.annualRevenues.value.value,
  //   ownerMobile: this.ownerMobile.value.value,
  //   annualGrowthRateAvailable: this.annualGrowthRateAvailable.value.value,
  //   annualGrowthRate: this.annualGrowthRate.value.value,
  //   annualProfitMargin: this.annualProfitMargin.value.value,
  //   annualProfitOverwrite: this.annualProfitOverwrite.value.value,
  //   totalExistingLongTermDebt: parseFloat(this.totalExistingLongTermDebt.value.value),
  //   totalExistingWorkingCapital: this.totalExistingWorkingCapital.value.value,
  //   averageAnnualInterestRate: this.averageAnnualInterestRate.value.value,
  //   totalAnnualInterest: this.totalAnnualInterest.value.value
  // };

  render() {
    return (
      <Fragment>
        <div className="form-group row">
          <label htmlFor="businessName" className="col-sm-3 col-form-label">
            Business Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.businessName}
              placeholder="Business Name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="businessIDCIN" className="col-sm-3 col-form-label">
            Business ID / CIN
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.businessIDCIN}
              placeholder="Business ID / CIN"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ownerName" className="col-sm-3 col-form-label">
            Owner Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.ownerName}
              placeholder="Owner Name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ownerEmail" className="col-sm-3 col-form-label">
            Owner Email
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              ref={this.ownerEmail}
              placeholder="Owner Email"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ownerMobile" className="col-sm-3 col-form-label">
            Owner Mobile
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              ref={this.ownerMobile}
              placeholder="Owner Mobile"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="retailWholesale" className="col-sm-3 col-form-label">
            Retail / Wholesale
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.retailWholesale}
              placeholder="Retail / Wholesale"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="sectorDropDown" className="col-sm-3 col-form-label">
            Sector
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              ref={this.sectorDropDown}  
              onChange={this.props.updateSectorCode}            
            >
              <option defaultValue>Choose a Sector</option>
              {Object.keys(this.props.sectorData).map((key, value) => (
               <option key={key} value={value}>{this.props.sectorData[key]}</option> 
              ))}              
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="sectorCode" className="col-sm-3 col-form-label">
            Sector Code
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.sectorCode}
              onChange="findBenchmarking()"
              placeholder="Sector Code"
              readOnly
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="zoneDropDown" className="col-sm-3 col-form-label">
            Zone
          </label>
          <div className="col-sm-9">
            <select className="form-control" ref={this.zoneDropDown}>
              <option defaultValue>Choose a Zone</option>
              {this.props.zoneData.map((zone, id) =>
              <option key={id} value={zone}>{zone}</option>)};          
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="stateDropDown" className="col-sm-3 col-form-label">
            Location / State
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              ref={this.stateDropDown}
              onChange="findBenchmarking()"
            >
            <option defaultValue>Choose a Location / State</option>

            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastestYear" className="col-sm-3 col-form-label">
            Lastest Year
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              ref={this.lastestYear}
              placeholder="Lastest Year"
              min="1900"
              max="2080"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="annualRevenues" className="col-sm-3 col-form-label">
            Annual Revenues
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              ref={this.annualRevenues}
              placeholder="Annual Revenues"
              onchange="calculateAnnualProfitOverwrite()"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ownerMobile" className="col-sm-3 col-form-label">
            Owner Mobile
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.ownerMobile}
              placeholder="Owner Mobile"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="annualGrowthRateAvailable"
            className="col-sm-3 col-form-label"
          >
            Annual Growth Rate Available
          </label>
          <div className="col-sm-9">
            <select
              className="form-control"
              ref={this.annualGrowthRateAvailable}
            >
              <option defaultValue>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="annualGrowthRate" className="col-sm-3 col-form-label">
            Annual Growth Rate
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.annualGrowthRate}
              placeholder="Annual Growth Rate"
              pattern="^[0-9]{1,2}((,|\.)[0-9]{1,10})?%?$"
              onfocusout="percentage()"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="annualProfitMargin"
            className="col-sm-3 col-form-label"
          >
            Annual Profit Margin
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.annualProfitMargin}
              placeholder="Annual Profit Margin"
              pattern="^[0-9]{1,2}((,|\.)[0-9]{1,10})?%?$"
              onfocusout="percentage()"
              onchange="calculateAnnualProfitOverwrite()"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="annualProfitOverwrite"
            className="col-sm-3 col-form-label"
          >
            Annual Profit (overwrite if available)
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              ref={this.annualProfitOverwrite}
              placeholder="Annual Profit (overwrite if available)"
              readOnly
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="totalExistingLongTermDebt"
            className="col-sm-3 col-form-label"
          >
            Total Existing Long Term Debt
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              ref={this.totalExistingLongTermDebt}
              placeholder="Total Existing Long Term Debt"
              onchange="calculateTotalAnnualInterest()"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="totalExistingWorkingCapital"
            className="col-sm-3 col-form-label"
          >
            Total Existing Working Capital
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              ref={this.totalExistingWorkingCapital}
              placeholder="Total Existing Working Capital"
              onchange="calculateTotalAnnualInterest()"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="averageAnnualInterestRate"
            className="col-sm-3 col-form-label"
          >
            Average Annual Interest Rate
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              ref={this.averageAnnualInterestRate}
              placeholder="Average Annual Interest Rate"
              pattern="^[0-9]{1,2}((,|\.)[0-9]{1,10})?%?$"
              onchange="calculateTotalAnnualInterest()"
              onfocusout="percentage()"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <fieldset disabled>
            <label
              htmlFor="totalAnnualInterest"
              className="col-sm-3 col-form-label"
            >
              Total Annual Interest (overwrite if available)
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                ref={this.totalAnnualInterest}
                placeholder="Total Annual Interest (overwrite if available)"
                required
              />
            </div>
          </fieldset>
        </div>
      </Fragment>
    );
  }
}

export default InputFormBusinessInfo;
