import React, { Component } from 'react';

class Card extends Component {
  state = {
    flipped: false,
  }

  flipCard = () => {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    const { flipped } = this.state
    const { front, back, } = this.props.card;
    // const { card: { front, back }, cool } = this.props;
    
    return (
      <div onClick={this.flipCard}>
        { flipped ? back : front }
        <button onClick={this.deleteCard}>X</button>
        <Card
          card={card}
          deleteCard={this.props.deleteCard}
        />
      </div>
    )
  }
}

export default Card;