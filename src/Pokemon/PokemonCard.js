import React, { Component } from 'react'
import styled from 'styled-components'

const Sprite = styled.img`
width:5em;
height:5em;

`;
export default class PokemonCard extends Component {
    constructor(props){
        super(props)
    this.state = {
        name:"",
        imageUrl:"",
        pokemonIndex:""
    }};
    componentDidMount(){
    const name = this.props.name;
    console.log(name)
    const url = this.props.url;
    const pokemonIndex = url.split('/')[url.split('/').length -2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true `
    this.setState({
        name,
        imageUrl,
         pokemonIndex});
    
    }

    render() {
     
        
        return (
            <div className='col-md-4 col-sm--mb-5'>
                <div className='card'>
                    <h5 background-color='blue'className="card-header">{this.state.pokemonIndex}</h5>
                    <Sprite
                    className="card-img-top rounded mx-auto mt-3"
                    onLoad={()=>this.setState({imageLoading:false})}
                    onError= {()=>this.setState({tomanyRequests:true})}
                    src={this.state.imageUrl}/>

                <div className='card-header'>
                    <h1> {this.state.name} </h1>
                 </div>
                </div>
            </div>
        )
    }
}
