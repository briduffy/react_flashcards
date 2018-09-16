import React, { Component } from 'react';
import Card from './Card';
import CardForm from './CardForm';

class App extends Component {
  state = {
    cards: [
      {id: 1, front: 'Is Spencer the man?', back: 'Yes.'},
      {id: 2, front: 'Is Javascript impossible?', back: 'Maybe.'},
      {id: 3, front: 'La Croix or Dr. Pepper?', back: 'La Croix.'},
      {id: 4, front: 'Is Brittanie the queen of of DevPoint Labs?', back: 'Obviously.'}
    ]
  }

  cardsLoop = () => {
    return this.state.cards.map(card => {
      return <Card card={card}/>
    })
  }

  addCard = (front, back ) => {
    const { cards, id } = this.state
    const card = { id, front, back, flipped: false }
    this.setState ({ cards: [card, ...cards],
    id: id + 1 })
  }

  deleteCard(id) {
    this.setState({cards: this.state.cards.filter(card => card.id !== id)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Flaschards</h1>
        </header>
        <CardForm addCard={this.addCard}/>
        {this.cardsLoop()}
      </div>
    );
  }
}

export default App;