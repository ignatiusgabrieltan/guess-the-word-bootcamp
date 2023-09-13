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
      guessedLetters: [],
      guessesLeft: 10,
      letter: "",
      gamePhase: "PLAYING",
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
      guessedLetters: this.state.guessedLetters.includes(this.state.letter)
        ? [...this.state.guessedLetters]
        : [...this.state.guessedLetters, this.state.letter],
      guessesLeft:
        this.state.currWord.includes(this.state.letter) ||
        this.state.guessedLetters.includes(this.state.letter)
          ? this.state.guessesLeft
          : this.state.guessesLeft - 1,
    });
  }

  //word generate
  generateWordDisplay = () => {
    const wordDisplay = [];
    // for...of is a string and array iterator that does not use index
    for (let guess of this.state.currWord) {
      if (this.state.guessedLetters.includes(guess)) {
        wordDisplay.push(guess);
      } else {
        wordDisplay.push("_");
      }
    }
    return <h3>{wordDisplay.toString()}</h3>;
  };

  // Insert form callback functions handleChange and handleSubmit here

  render() {
    return (
      <div className="App">
        <header>
          <h1>☠️HANG-MAN☠️</h1>
        </header>
        <div className="hang-man"></div>
        <div className="App-div">
          <h3>Word Display</h3>
          {this.generateWordDisplay()}
          <h4>
            Guessed Letters
            <br />
            {this.state.guessedLetters.length > 0
              ? this.state.guessedLetters.toString()
              : "-"}
            <br />
            You have {this.state.guessesLeft} Lives left...
          </h4>
          <form onSubmit={(e) => this.onSubmit(e)}>
            <label>Type your letter here</label>
            <br />
            <input
              type="text"
              name="letter"
              value={this.state.letter}
              maxLength="1"
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
