import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <img className="Card" src={this.props.image} alt={this.props.name} />
    );
  }
}

export default Card;

/* 
// Process of adding the Card and the functionality within:
- import the Card component into Deck.js
- to display the cards, we need to map through each card that is drawn,
- then render that card's name, image and alt

*/
