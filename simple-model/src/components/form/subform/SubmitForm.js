import React, { Fragment } from "react";

const SubmitForm = props => {
  return (
    <Fragment>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <input type="button" onClick={this.fillTables} value="Add Item" />
    </Fragment>
  );
};

export default SubmitForm;
