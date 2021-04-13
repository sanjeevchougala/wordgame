import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import ScrabbleComponent from './components/ScrabbleComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
          <ScrabbleComponent/>
      </div>

    );
  }
}


export default App;
