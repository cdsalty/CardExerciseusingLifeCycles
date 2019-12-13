import React, { Component } from "react";
import axios from "axios";

// const API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/";
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
    let deck_id = this.state.deck.deck_id;
    // Problem faced: The deck has 52 cards so need to take care of any issues once the deck is depleated.
    // Solution: Using a 'try' method that comes with async/await and also ".remaining()" which is a method provided by response
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardResponse = await axios.get(cardUrl);
      // console.log(cardResponse); // cardResponse is actually the entire object vs what we need is the data from it
      console.log(cardResponse.data); // This shows how many cards are left after 'get(ing) a card'
      // if (cardResponse.data.remaining === 0) {    // PROBLEM: it is disregarding the last card. remaining is zero after that card.
      // if (cardResponse.data.success === "true") {
      // same as above
      if (!cardResponse.data.remaining) {
        throw new Error("There are no more cards remaining");
      }
      // Need to get the card pulled:
      let card = cardResponse.data.cards[0];
      this.setState(state => [
        {
          drawn: [
            ...state.drawn,
            {
              id: card.code,
              image: card.image,
              name: `${card.value} of ${card.suit}`
            }
          ]
        }
      ]);
    } catch (err) {
      alert(err);
    }
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
