import React, { Component } from 'react';
import './product.css';
import Tile from '../shirt-tiles/shirt-tiles';


class ProductPage extends Component {
constructor(props){
    super(props);
    this.state={
        image: 'http://placehold.it/200x200',
        name: 'Madness-js',
        description: 'Method to madness is upon us...Method to madness is upon us...Method to madness is upon us...Method to madness is upon us...Method to madness is upon us...',
        price: '$29'
    }
}
    render(){
        return(
            <div className="container products" >
            <div className="row">
                <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                 <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                
                <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                 <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                 <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                 <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                <Tile 
                image={this.state.image}
                name={this.state.name}
                price={this.state.price}
                description={this.state.description}
                />
                
                </div>
                </div>
        );
    }

}

export default ProductPage;