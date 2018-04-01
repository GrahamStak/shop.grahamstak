import shop from '../api/shop';
import * as consts from '../api/constants';

export const recieveProducts = (product)=>({type:consts.ADD_TO_CART,
payload : product})


export const getAllProducts = () => dispatch =>{
    shop.getProducts(shirts => {
        dispatch(recieveProducts(shirts))
    })
}

export const addToCart = shirtId => (dispatch, getState)=> {
    dispatch(addToCartUnSafe(shirtId))
}