import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Container from './App';
import store from './state-storage/store';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.css';

const App = ()=> (
    <Provider store={store}>
        <Container/>
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
