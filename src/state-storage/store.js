import { createStore, combineReducers } from 'redux';
import ShoppingCartReducer from './reducers/shoppingCartReducer';
import ShowCartReducer from './reducers/showCartReducer';

const allReducers = combineReducers({
    showCart:ShowCartReducer,
    shoppingCart:ShoppingCartReducer
});

const store = createStore(
    allReducers, 

    window.devToolsExtension && window.devToolsExtension()
)

export default store;