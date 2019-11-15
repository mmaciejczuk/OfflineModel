import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="simple-model">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={100} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
