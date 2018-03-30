import React, { Component } from 'react';
import Navigation from './components/navbar/navbar';
import Product from './components/product/product';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';
// import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
<Navigation/>
<Product/>
      </div>
    );
  }
}

export default App;
