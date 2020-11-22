import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currFace: "heads",
      totalFlips: 0,
      headCount: 0,
      tailCount: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    const flipLand = Math.floor(Math.random() * 2); //generate number between 0 and 1
    if (flipLand === 0) {
      this.setState({
        currFace: "heads",
        totalFlips: this.state.totalFlips + 1,
        headCount: this.state.headCount + 1,
      });
    } else {
      this.setState({
        currFace: "tails",
        totalFlips: this.state.totalFlips + 1,
        tailCount: this.state.tailCount + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Let's Flip A Coin</h1>
        <Coin face={this.state.currFace} />
        <button onClick={this.flipCoin}>FLIP ME</button>
        <p>{`Out of ${this.state.totalFlips}, there have been ${this.state.headCount} heads and ${this.state.tailCount} tails`}</p>
      </div>
    );
  }
}

export default CoinFlipper;
