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
      <div>
        <div onClick={this.flipCard}>
          { flipped ? back : front }
        </div>
        <button onClick={() => this.props.deleteCard(this.props.card.id)}>Delete</button>
      </div>
    )
  }
}

export default Card;