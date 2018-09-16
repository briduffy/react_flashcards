import React from 'react'

class CardForm extends React.Component {
  state = { front: '', back: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    const { front, back } = this.state
    this.props.addCard(front, back)
    this.setState({ front: '', back: ''})
  }

  handleFrontChange = (e) => {
    this.setState ({ front: e.target.value })
  }

  handleBackChange = (e) => {
    this.setState ({ back: e.target.value })
  }

  render() {
    const { front, back } =   this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        value={front}
        onChange={this.handleFrontChange}
        required
        placeholder="Front of card..."
      />
      < br/>
      <input
        value={back}
        onChange={this.handleBackChange}
        required
        placeholder="...back of card."
      />
      <br />
      <button>Add Card</button>
      </form>
    )
  }
}
export default CardForm