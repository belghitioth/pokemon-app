import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';

const numbers = [1, 2, 3, 4, 5,6,7,8,9];
const listItems = numbers.map((number,index) =>
  <Pokemon idPokemon={number.toString()} key={index}/>
);
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {name: "",weight: 0, abilities: [],image:""};
  }
 
  render() {
    return (
      <ul>{listItems}</ul>
    
    )
  }
}


export default App;
