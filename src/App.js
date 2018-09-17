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
      return <Card
        key={card.id}
        card={card}
        deleteCard={this.deleteCard}/>
    })
  }

  addCard = (front, back ) => {
    const { cards, id } = this.state
    const card = { id, front, back, flipped: false }
    this.setState ({ cards: [card, ...cards],
    id: id + 1 })
  }

  deleteCard = (id) => {
    this.setState({cards: this.state.cards.filter(card => card.id !== id)})
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
        <h1 className="center">React Flaschards</h1>
        </header>
        <div className="center">
          <CardForm addCard={this.addCard}/>    
          {this.cardsLoop()}
        </div>
      </div>
    );
  }
}

export default App;