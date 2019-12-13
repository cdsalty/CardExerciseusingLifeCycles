import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

import "./Deck.css";
const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";
// for card: https://deckofcardsapi.com/api/deck/${deck_id}/draw/

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    // will be called after the First Render
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    let deck_id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      // console.log(cardRes); working
      // check what the card response looks like to prevent an error when running out of cards
      if (!cardRes.data.success) {
        //  if(cardRes.data.remaining === 0 will still leave one card in the deck)
        throw new Error("Sorry but there are no more remaining cards");
      }

      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map(eachCard => (
      <Card key={eachCard.id} name={eachCard.name} image={eachCard.image} />
    ));
    return (
      <div className="Deck">
        <h2 className="Deck-title">Card Dealer</h2>
        <h5 className="Deck-title subtitle">
          Just a little demo using react...
        </h5>
        <button onClick={this.getCard}>Get Card</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
