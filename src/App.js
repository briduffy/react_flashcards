import React, { Component } from 'react';
import Card from './Card';
import CardForm from './CardForm';

class App extends Component {
  state = {
    cards: [
      {front: 'Is Spencer the man?', back: 'Yes.'},
      {front: 'Is Javascript impossible?', back: 'Maybe.'},
      {front: 'La Croix or Dr. Pepper?', back: 'La Croix.'},
      {front: 'Is Brittanie the queen of of DevPoint Labs?', back: 'Obviously.'}
    ]
  }

  cardsLoop = () => {
    return this.state.cards.map(card => {
      return <Card card={card}/>
    })
  }


  addCard = (front, back ) => {
    const { cards } = this.state
    const card = { front, back, flipped: false }
    this.setState ({ cards: [card, ...cards] })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Flaschards</h1>
        </header>
        {this.cardsLoop()}
        <CardForm addCard={this.addCard}/>
      </div>
    );
  }
}

export default App;