import React, { Component } from "react";
import axios from "axios";

const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";
// for card: https://deckofcardsapi.com/api/deck/${deck_id}/draw/

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    // will be called after the First Render
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    let id = this.state.deck.deck_id;
    let cardUrl = `${API_BASE_URL}/${id}/draw/`;
    let cardRes = await axios.get(cardUrl);
    // console.log(cardRes); working
    console.log(cardRes.data);
  }
  render() {
    return (
      <div>
        <h2>Card Dealer</h2>
        <button onClick={this.getCard}>Get Card</button>
      </div>
    );
  }
}

export default Deck;
