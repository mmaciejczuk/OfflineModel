import React, { Component } from "react";
import OfflineModelContext from "./OfflineModelContext";

class OfflineModelProvider extends Component {
  state = {
    titleLine: "SIMPLE OFFLINE MODEL",
    loading: true,
    sectorsMap: [],
    zones: [],
    states: [],
    code: null
  };

  render() {
    return (
      <OfflineModelContext.Provider value="offline model context">
        {this.props.children}
      </OfflineModelContext.Provider>
    );
  }
}

export default OfflineModelProvider;
