import React, { Component } from 'react';
import './product.css';
import Tile from '../shirt-tiles/shirt-tiles';
import { connect } from 'react-redux'

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
        const {products} = this.props;
        console.log("PRODUCTS", products, products.length)
        return(
            <div className="container products" >
                <div className="row">
                    <div>
                    {products.length > 0 && products.map((p, i) => {
                        return(
                            <Tile
                                key={i} 
                                image={p.sync_variants[0].files[1].preview_url}
                                name={p.sync_product.name}
                                price={this.state.price}
                                description="Some Description"
                            />
                        )
                    })}
                    </div>
                    {/* {products.length > 0 && 
                    <div>
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                    <Tile 
                            image={products[0].sync_variants[0].files[1].preview_url}
                            name={products[0].sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        />
                        </div>} */}
                    
                    </div>
                </div>
        );
    }

}

const mapStateToProps = state => ({
    products: state.products.products,
})

export default connect(mapStateToProps, null)(ProductPage)

{/* <Tile 
                            image={p.sync_variants[0].files[1].preview_url}
                            name={p.sync_product.name}
                            price={this.state.price}
                            description="Some Description"
                        /> */}