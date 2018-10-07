import React from 'react';
import './App.css';

function Instructions (props) {
    // compnent passed into App
    // initial state of it will be nothing
    // depending if stanadrd of expert level is chosen, then render correct instuctions 
    if (props.gameMode === 'standard'){
      return (
        <p>Please, enter a number bewteen 1 and 10</p>
      );
    }else if(props.gameMode === 'expert'){
      return (
        <p>Please, enter a number bewteen 1 and 100</p>
      );
    }
    return null
  }

export default Instructions;