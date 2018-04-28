import { combineReducers } from 'redux'
// just import your reducers as you want your state keys named and
// add them to the combineReducers arguments
// import shoppingCart from './shoppingCartReducer'
import products from './productsReducer'
import loading from './loadingReducer'

const rootReducer = combineReducers({
  loading,
  products
})

export default rootReducer
