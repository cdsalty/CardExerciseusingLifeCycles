import React, { Component } from "react";

import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    // let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`; // this worked presiously but not that it's inside the constructor, it will always need " T H I S "
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    // will pass in transformn as a style in the return
  }
  render() {
    // transform: translate(10px, 20px)
    // ISSUE: Doing it this way will cause the entire deck to change angles render; instead, move to constructor
    // let angle = Math.random() * 90 - 45;
    // let xPos = Math.random() * 40 - 20;
    // let yPos = Math.random() * 40 - 20;
    // let transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    // // will pass in transformn as a style in the return
    return (
      <img
        style={{ transform: this._transform }}
        className="Card"
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}

export default Card;

/* 
// Process of adding the Card and the functionality within:
- import the Card component into Deck.js
- to display the cards, we need to map through each card that is drawn,
- then render that card's name, image and alt


need to iterate over the drawn cards within the state, create a new card component for each one. 
*/
