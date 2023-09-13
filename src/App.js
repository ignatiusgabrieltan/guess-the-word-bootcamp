import React from "react";
import { getRandomWord } from "./utils.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    // Always call super with props in constructor to initialise parent class
    super(props);
    this.state = {
      // currWord is the current secret word for this round. Update this with this.setState after each round.
      currWord: getRandomWord(),
      // guessedLetters stores all letters a user has guessed so far
      guessesLeft: 10,
      guessedLetters: [],
      letter: "",
    };
  }

  //event items
  handleChange = (e) => {
    this.setState({
      letter: e.target.value,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      letter: "",
      guessedLetters: this.state.letter,
    });
  }

  //word generate
  generateWordDisplay = () => {
    const wordDisplay = [];
    // for...of is a string and array iterator that does not use index
    for (let letter of this.state.currWord) {
      if (this.state.guessedLetters.includes(letter)) {
        wordDisplay.push(letter);
      } else {
        wordDisplay.push("_");
      }
    }
    return wordDisplay.toString();
  };

  // Insert form callback functions handleChange and handleSubmit here

  render() {
    return (
      <div className="App">
        <div className="hang-man"></div>
        <div className="App-div">
          <h1>Guess The Word 🚀</h1>
          <h3>Word Display</h3>
          {this.generateWordDisplay()}
          <h3>Guessed Letters</h3>
          {this.state.guessedLetters.length > 0
            ? this.state.guessedLetters.toString()
            : "-"}
          <form onSubmit={(e) => this.onSubmit(e)}>
            <label>Type your letter here</label>
            <br />
            <input
              type="text"
              name="letter"
              value={this.state.letter}
              maxlength="1"
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <input id="submit-button" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
