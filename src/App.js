import React, {Component} from 'react';
import { BrowserRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'
import Navbar from './components/navbar'
import Product from './components/product'
import { connect } from 'react-redux'
import pf from './state-storage/api/examples'
import {getAllProducts} from './state-storage/actions/products'


class App extends Component {

    componentDidMount() {
      this.props.getAllProducts()
    }

    render(){
        const {loading} = this.props;
        return (
            <Router>
                    <div>
                        <Navbar
                        />
                        {/* PUBLIC ROUTES */}
                        <Route exact strict path='/' component={() => (
                          <Product/>
                        )} />
                    </div>
            </Router>
          )
    }
}

const mapStateToProps = state => ({
  loading: state.loading.loading,
})

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))