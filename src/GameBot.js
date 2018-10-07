import React from 'react';
import './App.css';


function GameBot (props) {
let inputNumber = parseInt(props.value, 0);

if(props.gameMode === 'standard'){
    if(inputNumber > props.randomNumber ){
      return (
        <p>Too High, Guess Again</p>
      );
    }else if(inputNumber < props.randomNumber) {
        return (
          <p>Too Low, Guess Again</p>
        );
    }else if(inputNumber === props.randomNumber) {
        props.win()
        return (
          <p>Things you did: THAT -- Nice Job. You guessed in {props.totalGuesses} guess(es)</p>
        );
    }else {
        return (
            <p>Please enter a number</p>
          );
    }
  }else if(props.gameMode === 'expert') {
    if(inputNumber > props.randomNumber ){ 
        return (
          <p>Too High, Guess Again</p>
        );
      }else if(inputNumber < props.randomNumber) {
          return (
            <p>Too Low, Guess Again</p>
          );
      }else if(inputNumber === props.randomNumber) {
        return (
            <p>Things you did: THAT -- Nice Job. You guessed in {props.totalGuesses} guess(es)</p>
        );
      }else {
        return (
            <p>Please enter a number</p>
          );
      }
    }
    return null
}

export default GameBot;