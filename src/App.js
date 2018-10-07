import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
import Instructions from './Instructions';
import Guess from './Guess';
import GameBot from './GameBot';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
      gameMode: '',
      enteredValue: '',
      submittedValue: '',
      submitted: false,
      guesses: 0,
      wins: 0
    };
  }

  numberGenerator(buttonTitle){
      if (buttonTitle === 'Standard Level') {
        this.setState({
          gameMode: 'standard',
          randomNumber: Math.floor(Math.random() * 10) + 1
        })
      }else if(buttonTitle === 'Expert Level') {
        this.setState({
          gameMode: 'expert',
          randomNumber: Math.floor(Math.random() * 100) + 1
        });
      }
    }  
    

    handleChange = (event) => {
      this.setState({enteredValue: event.target.value});
    }

    handleSubmit = (event) => {
      event.preventDefault();
      
      this.setState({
        submitted:true,
        guesses: this.state.guesses + 1,
        submittedValue: this.state.enteredValue
      })
    }

    handleGamesWon = () => {
      if (this.state.wins === 0) {
        this.setState({
          wins: this.state.guesses
        })
      }else if(this.state.guesses < this.state.wins) {
        this.setState({
          wins: this.state.guesses
        })
      }
    }

    newRound = () => {
      if(this.state.gameMode === 'standard'){
        this.setState({
          randomNumber: Math.floor(Math.random() * 10) + 1,
          enteredValue: '',
          submittedValue: '',
          submitted: false,
          guesses: 0,
        })
      }else {
        this.setState({
          randomNumber: Math.floor(Math.random() * 100) + 1,
          enteredValue: '',
          submittedValue: '',
          submitted: false,
          guesses: 0,
        })
      }
      
    }

    resetGame = () => {
      this.setState({
        randomNumber: 0,
        gameMode: '',
        enteredValue: '',
        submittedValue: '',
        submitted: false,
        guesses: 0,
        wins: 0
      })
    }
    

    render () {  
      return (
        <div className="App">
          <Header title='Start Game:' />
          <Button buttonTitle="Standard Level" onClick={() => this.numberGenerator("Standard Level")} />
          <Button buttonTitle="Expert Level" onClick={() => this.numberGenerator("Expert Level")} />
          <Instructions gameMode={this.state.gameMode}/>
          <Guess handleSubmit={this.handleSubmit} value={this.state.enteredValue} onChange={this.handleChange} />
          {this.state.submitted && (
            <GameBot randomNumber={this.state.randomNumber} gameMode={this.state.gameMode} value={this.state.submittedValue} totalGuesses={this.state.guesses} win={this.handleGamesWon} />
          )}
          <p>Tries: {this.state.guesses}</p>
          <p>High Score: {this.state.wins}</p>
          <Button onClick={this.newRound} buttonTitle="New Round" />
          <Button onClick={this.resetGame} buttonTitle="Reset Game" />
        </div>
        );
    }
}

export default App;
