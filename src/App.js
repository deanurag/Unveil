import React, { Component } from "react";
import NevBar from "./component/NevBar";
import News from "./component/News";
import Tickertape from "./Tickertape";

export default class App extends Component {
  render() {
    return (
      <div>
        <Tickertape />
        <NevBar />
        <News />
      </div>
    );
  }
}
