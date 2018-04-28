import { RECEIVE_PRODUCTS } from '../reducers/constants';
import {toggleLoading} from './loading';
import axios from 'axios'
const PrintfulClient = require('../api/printfulclient');
const pf = new PrintfulClient('');
const url = `https://api.theprintful.com/`

export const receiveProducts = (products)=>({type:RECEIVE_PRODUCTS, products})


export const getAllProducts = () => dispatch =>{
    const options = {
        headers:{
            Authorization: 'Basic Z2p6bTUzdDUtNG12Ny1sczFtOmpneDEtMzBiM3IzbDJuam1r',
        }
    }
    const promises = []
    axios.get(`${url}sync/products/`, options).then(async (res) => {
        res.data.result.forEach((p) => {
            promises.push(axios.get(`${url}sync/products/@${p.external_id}`, options))
        })
        console.log(promises)
        const products = []
        axios.all(promises).then(function(results) {
            results.forEach(function(response) {
                products.push(response.data.result)
            })
            console.log('products', products, products.length)
            dispatch(receiveProducts(products))
            dispatch(toggleLoading(false))
        });
    })
}

// export const addToCart = shirtId => (dispatch, getState)=> {
//     dispatch(addToCartUnSafe(shirtId))
// }