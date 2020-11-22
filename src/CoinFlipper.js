import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currFace: "heads",
      headCount: 0,
      tailCount: 0,
    };
  }

  render() {
    return (
      <div>
        <Coin face={this.state.currFace} />
      </div>
    );
  }
}

export default CoinFlipper;
