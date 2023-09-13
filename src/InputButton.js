import React from "react";
import "./InputButton.css";

class InputButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: "",
      guessedLetter: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      letter: e.target.value,
    });
  };

  onSubmit(e) {
    e.preventDefault();
    // alert(`you've entered ${this.state.gussedLetter}`);
    const letterEntered = `${this.state.letter}`;
    const data = { id: this.state.guessedLetter.length + 1, letterEntered };

    this.setState({
      letter: "",
      guessedLetter: [...this.state.guessedLetter, data],
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <label>Type your letter here</label>
        <br />
        <input
          type="text"
          name="letter"
          value={this.state.letter}
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <input id="submit-button" type="submit" value="submit" />
      </form>
    );
  }
}
export default InputButton;
