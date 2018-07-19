import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="all-content">
        <body className="container-flux">
          <header>
            <div className ="container">
              <div className="row">
                <div className="col-md-8">
                  <input type="text" placeholder="Search"/>
                  <button type="button" class="btn btn-primary">Search</button>
                </div>
                <div className="col-md-4">
                  <div className="header-left">
                    <a href="/"><i class="material-icons"></i>Account</a>
                    <a href="/"><i class="fa fa-cart-arrow-down"></i>My Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="container-flux">
          <div className="nav-menu">
            <div className ="container">
              <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#">HOME</a>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                      SHOP
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Link 1</a>
                      <a className="dropdown-item" href="#">Link 2</a>
                      <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">CONTACT</a>
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
                    <i class="fa fa-chrome"></i>
                  </div>
                  <div className="cell-content">
                    <h3>Free shipping</h3>
                    <h5>On all oders over 90$</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cell-icon">
                    <i class="fa fa-chrome"></i>
                  </div>
                  <div className="cell-content">
                    <h3>Free shipping</h3>
                    <h5>On all oders over 90$</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cell-icon">
                    <i class="fa fa-chrome"></i>
                  </div>
                  <div className="cell-content">
                    <h3>Free shipping</h3>
                    <h5>On all oders over 90$</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="item-1">

          </section>
          <footer>
            <div class="copyright-section">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="copytext">&copy; MyProfile, All rights reserved | Design By: v4n8877</div>
                      </div>
                  </div>
              </div>
          </div>
          </footer>
        </body>
      </div>
    );
  }
}
export default App;