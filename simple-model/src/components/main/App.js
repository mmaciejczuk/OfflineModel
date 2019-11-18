import React from "react";
import Header from "../header/Header";
import InputForm from "../form/InputForm";
import { useHttp } from "../hooks/http";

const App = props => {
  const [isLoadingSectors, sectorsMap] = useHttp(
    "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetSectors",
    null,
    null,
    []
  );

  const [isLoadingZones, zones] = useHttp(
    "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetZone",
    null,
    null,
    []
  );

  const [isLoadingStates, states] = useHttp(
    "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetState",
    "zone",
    "South India Zone",
    []
  );

  let content = <div>Loading data...</div>;

  if (
    !isLoadingSectors &&
    !isLoadingZones &&
    !isLoadingStates &&
    sectorsMap &&
    zones &&
    states
  ) {
    return (
      <div className="container">
        <div className="p-3 mb-2 bg-primary text-white">
          <Header />
        </div>
        <InputForm sectorData={sectorsMap} zoneData={zones} stateData={states} />
      </div>
    );
  } else if (
    isLoadingSectors &&
    isLoadingZones &&
    isLoadingStates &&
    !sectorsMap &&
    !zones &&
    !states
  ) {
    content = <div>Failed to fetch data...</div>;
  }

  return content;
};

export default App;
