import React, { Component } from "react";
import OfflineModelProvider from "../main/OfflineModelProvider";
import Header from "../header/Header";
import InputForm from "../form/InputForm";

class App extends Component {
  state = {
    loading: true,
    sectorsMap: [],
    zones: [],
    states: [],
    code: null
  };

  componentDidMount() {
    this.getSectorsMap();
    this.getZones();
    this.getStatesForZone("South India Zone");
  }

  updateSectorCodeState() {
    //this.setState({code:})
  }

  getSectorsMap() {
    const url =
      "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetSectors";

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: false,
          sectorsMap: json
        });
      });
  }

  getZones() {
    const url =
      "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetZone";

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: false,
          zones: json
        });
      });
  }

  getStatesForZone(zone) {
    const url = `https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetState?zone=${zone}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          loading: false,
          states: json
        });
      });
  }

  render() {
    var { loading, sectorsMap } = this.state;

    if (loading) {
      return <div>loading...</div>;
    }
    if (!sectorsMap) {
      return <div>something goes wrong...</div>;
    }

    return (
      <OfflineModelProvider>
        <div className="container">
          <div className="p-3 mb-2 bg-primary text-white">
            <Header />
          </div>
          <InputForm
            // sectorData={this.state.sectorsMap}
            // zoneData={this.state.zones}
            // updateSectorCodeState={this.updateSectorCode}
          />
        </div>
      </OfflineModelProvider>
    );
  }
}

export default App;
