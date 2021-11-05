import React from 'react';
import './App.css';
import pokemons from './Data';
import Pokedex from "./Pokedex";

class App extends React.Component {
  render () {
    return (
      <main className="App">
        <h1><strong>Pokedex</strong></h1>
        <Pokedex pokemons={pokemons} />
      </main>
    );
  }
}

export default App;
