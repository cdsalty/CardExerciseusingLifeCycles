import React from "react";
import Deck from "./Deck";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Deck />
    </div>
  );
}

export default App;

/*
G O A L S :
1.  To send a request at the beginning, AFTER our component has mounted, to grab a deck id and store it 
    in the state. (preparing to make individual cards later... )

- Begin with creating a Deck component and a Card component. The card component will be stateless.


when the page loads, send request to: https://www.deckofcardsapi.com/api/deck/new/shuffle/
- store the deck id it gives you in order to make further requests to retreive each cared inage. Add a button to your app
  that allows a user to draw a new card.

- when a user clicks the button, send another request to the API, 
  this time to https://deckofcardsapi.com/api/deck/$%7Bdeck_id%7D/draw/. 
   ** be sure to use deck id
- use the data in the resonse to display a new card along with an information alt attribute

*/
