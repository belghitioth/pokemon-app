import React, { Component } from 'react';
// import logo from './logo.svg';


class Pokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {name: "",weight: 0, abilities: [],image:""};
  }
  getPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon/'+this.props.idPokemon+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({name: responseJson.name,
      weight :responseJson.weight,abilities :responseJson['abilities'][0].ability.name,
        image : responseJson.sprites.front_default
      
      })    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  componentDidMount() {
    this.getPokemon();
  }
  
  render() {
    return (
      <div>
        <h1 > {this.state.name} </h1>
        <img src={this.state.image} alt="pokemon"/>
        <div>First Ability : {this.state.abilities}  </div>
        <div>Weight : {this.state.weight} kg </div>
      

      </div>
    
    )
  }
}


export default Pokemon;
