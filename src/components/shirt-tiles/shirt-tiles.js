import React, { Components } from 'react';
import './shirt-tiles.css';

const ShirtTile = ({ name, image, description, price }) => {
    return (
        <div className="col-md-3 marg">
            <div className="thumbnail">
            <span className="pad-marg">
                <img style={{paddingBottom:'5%', width:'100%'}} 
                    src={image} alt="shirt image" 
                    className="img-fluid rounded" />
                <h5>{name}</h5>
                <p>{description}</p>
                <hr className="line"/>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <p className="price">{price}</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <button className="btn btn-success right">Add To Cart</button>
                    </div>
                </div>
                </span>
            </div>
        </div>
    )

}

export default ShirtTile;