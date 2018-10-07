import React from 'react';
import './App.css';

function Button(props) {
    return (
      <div className="buttonContainer">
        <button onClick={props.onClick}>{props.buttonTitle}</button>
      </div>
    );
  }

  export default Button;