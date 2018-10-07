import React from 'react';
import './App.css';

function Guess(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
            Guess:
            <input type="number" value={props.value} onChange={props.onChange} />
            </label>
            <button>Submit</button>
        </form>
    );
  }

  export default Guess;