import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import HomeStores from './stores/HomeStores.js';
import {Autocomplete} from 'react-autocomplete';

import Nav from './assets/img/nav_menu.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      getPhone: [],
      showPhone: []
    }
  }

  componentWillMount(){
    HomeStores.on("change", () => {
        this.setState({
          getPhone: HomeStores.getAllData(),
        });
      })
  }

  componentDidMount(){
    HomeStores.on("change", () => {
        this.setState({
          showPhone: this.state.getPhone,
        });
      })
  }

  onChangeSearch = () => {
    console.log(this.refs.searchPhone.value);
    let searchPhone = this.refs.searchPhone.value;
    let searchFinal = searchPhone.toLowerCase();
    
    let getPhone = this.state.getPhone;
    console.log(getPhone);
    let getFinal = getPhone.filter((getName, index)=>{
      console.log(searchFinal);
      if (getName.productName.toLowerCase().indexOf(searchFinal) > -1) {
        return true;
        }
   });
   this.setState({
    showPhone: getFinal
   });
  }

  render() {
    const {showPhone, getPhone} = this.state;
    console.log(showPhone);
    return (
      <div className="all-content">
        <div className="container-flux">
          <header>
            <div className ="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="content-input">
                    <input type="text" className="myInput" ref="searchPhone" placeholder="Search..." onChange={()=>this.onChangeSearch()} />
                      {showPhone.map((name) => {
                        return (
                          <div>
                              <a  href="/" style={{display: 'none'}} ref="showName" key={name.id}>{name.productName}</a>
                          </div>
                          )
                      })}
                      <button type="submit"><i class="fa fa-search"></i></button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="header-left">
                    <a href="/"><i className="material-icons"></i>Account</a>
                    <a href="/"><i className="fa fa-cart-arrow-down"></i>My Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="container-flux">
          <div className="nav-menu">
            <div className ="container">
              <nav className="navbar navbar-expand-sm">
                <Link className="navbar-brand" to="/">HOME</Link>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                      SHOP
                    </Link>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/">Link 1</a>
                      <a className="dropdown-item" href="/">Link 2</a>
                      <a className="dropdown-item" href="/">Link 3</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productlist" >CONTACT</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          </section>
          <section className="top-banner">
            <div className="row">
              <div className="col-md-12">
                <img src="https://colorlib.com/tyche/wp-content/uploads/sites/17/2017/06/hero.jpg" alt="img-banner"/>
              </div>
            </div>
          </section>
          <section className="bot-banner">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="cell-icon">
                    <i className="fa fa-chrome"></i>
                  </div>
                  <div className="cell-content">
                    <h3>Free shipping</h3>
                    <h5>On all oders over 90$</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cell-icon">
                    <i className="fa fa-chrome"></i>
                  </div>
                  <div className="cell-content">
                    <h3>Free shipping</h3>
                    <h5>On all oders over 90$</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cell-icon">
                    <i className="fa fa-chrome"></i>
                  </div>
                  <div className="cell-content">
                    <h3>Free shipping</h3>
                    <h5>On all oders over 90$</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="item">
            <Nav />
          </section>
          <footer>
            <div className="copyright-section">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="copytext">&copy; MyProfile, All rights reserved | Design By: v4n8877</div>
                      </div>
                  </div>
              </div>
          </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default App;