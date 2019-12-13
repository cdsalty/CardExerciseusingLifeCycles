import React, { Component } from "react";
import axios from "axios";

const API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }

  async componentDidMount() {
    // will be called after the First Render
    let deck = await axios.get(API_URL);
    this.setState({ deck: deck.data });
  }

  render() {
    return (
      <div>
        <h2>Card Dealer</h2>
      </div>
    );
  }
}

export default Deck;
