import React, { Component } from 'react'; 
import './navbar.css';

const heroStyle = {
  color: 'hsl(240,4.3%,90%)',
  fontFamily: "Lato,sans-serif",
}
const bgColor = {
  backgroundColor: '51526a'
}

class Navigation extends Component{
  render(){
      return(
          <div>
              <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-dark back-color">
                <a className="navbar-brand" style={heroStyle}>
                  Graham<span style={{color:'gold'}}>|</span>
                  <span style={{color:'gold', fontStyle: 'italic'}}>Stak</span> - Gear
                </a>
                <i style={{color:'#51526a', backgroundColor: 'gold', borderRadius:'20px', padding:'7px'}} className="fa fa-shopping-cart ml-md-auto" aria-hidden="true"></i>
              </nav>
              <div className="breadCrumb" style={{position:'fixed', top:'66px', right:'8px'}}>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Men's</li>
                  </ol>
                </nav>
              </div>
          </div>
      )
  }
}

export default Navigation;