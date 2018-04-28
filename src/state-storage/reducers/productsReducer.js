import { RECEIVE_PRODUCTS } from './constants'

const initialState = {
  products: [],
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS: return {
      products: action.products
    }
    default: return state
  }
}

export default productsReducer