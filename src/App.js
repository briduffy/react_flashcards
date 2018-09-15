import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  state = {
    cards: [
      {front: 'Is Spencer the man?', back: 'Yes.'},
      {front: 'Is Javascript impossible?', back: 'Maybe.'},
      {front: 'La Croix or Dr. Pepper?', back: 'La Croix.'}
    ]
  }

  cardsLoop = () => {
    return this.state.cards.map(card => {
      return <Card card={card}/>
    })
  }







  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Flashcards</h1>
        </header>
        {this.cardsLoop()}
      </div>
    );
  }
}

export default App;
