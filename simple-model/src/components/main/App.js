import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import InputForm from "../form/InputForm";

const App = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [sectorsMap, setSectorsMap] = useState({});
  const [zones, setZones] = useState([]);
  const [states, setStates] = useState({});
  const [code, setCode] = useState({});

  const getSectorsMap = () => {
    const url =
      "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetSectors";

    fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error('Could not fetch Sectors Map.');
        }
        return response.json();
      })
      .then(json => {
        setIsLoading(false);
        setSectorsMap(json);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const getZones = () => {
    const url =
      "https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetZone";

      fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error('Could not fetch Zones.');
        }
        return response.json();
      })
      .then(json => {
        setIsLoading(false);
        setZones(json);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const getStatesForZone = zone => {
    const url = `https://ce-creditapi-dev.azurewebsites.net/api/SectorMap/GetState?zone=${zone}`;

    fetch(url)
      .then(response => {
        if (!response.ok){
          throw new Error('Could not fetch States.');
        }
        return response.json();
      })
      .then(json => {
        setIsLoading(false);
        setStates(json);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getSectorsMap();
    getZones();
    getStatesForZone("South India Zone");
  }, []);

  let content = <div>Loading data...</div>;

  if (!isLoading && sectorsMap && zones) {
    return (
      <div className="container">
        <div className="p-3 mb-2 bg-primary text-white">
          <Header />
        </div>
        <InputForm
          sectorData={sectorsMap}
          zoneData={zones}
        />
      </div>
    );
  } else if (isLoading && !sectorsMap && !zones) {
    content = <div>Failed to fetch data...</div>;
  }

  return content;
};

export default App;
