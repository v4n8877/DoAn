import React, { Component } from 'react';
import  '../App.css';
import { Link } from 'react-router-dom';
import HomeStores from '../stores/HomeStores';
import Login from './login';
import ListCart from './listCart';
import Register from './register';
import Home from './home';
import ProductList from './productList';
import ProductDetails from './ProductDetails';

import Nav from './nav_menu.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      getPhone: [],
      showPhone: [],
      checkStore: false,
      textLogout: '',
      checkSearch: false
    }
  }

  componentWillMount(){
    let nameAcc = localStorage.getItem("nameAcc");
    if (nameAcc !== null) {
      this.setState({
      checkStore: true,
      textLogout: nameAcc
    });
    }
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
    let getFinal = getPhone.filter((getName, index)=>{
      console.log(searchFinal);
      if (getName.productName.toLowerCase().indexOf(searchFinal) > -1) {
        return true;
        }
   });
   this.setState({
    showPhone: getFinal,
    checkSearch: true
   });
  }

  checkout = () =>{
    localStorage.setItem("nameAcc", "");
    localStorage.removeItem("nameAcc");
    return (<Link to="/Home" />);
  }

  render() {
    const {showPhone, getPhone, checkStore , textLogout, checkSearch} = this.state;
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
                              <Link style={checkSearch? {display: 'block'}: {display: 'none', "overflow-y": "scroll" }} to={`/ProductList/${name.id}`} ref="showName" key={name.id} onClick={(key)=>this.getDetail(key)}>{name.productName}</Link>
                          </div>
                          )
                      })}
                     <button type="submit" class="btn btn-primary"><i className="fa fa-search"></i></button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="header-left">
                    <Link to={checkStore? "/Home": "/Login"} onClick={()=>this.checkLogin()}><i style={{color: "white", "padding-Right":"15px"}} className="fa fa-user"></i>{checkStore? textLogout : 'Account'}</Link>
                    <Link to="/Cart" component= {ListCart}><i style={{ "padding-Right":"15px"}} className="fa fa-cart-arrow-down"></i>My Cart</Link>
                    <Link to={checkStore? "/Home": "/Register"} onClick={() => this.checkout()}> {checkStore? 'log out' : 'REGISTER'}</Link>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section className="container-flux">
            <div className="nav-menu">
              <nav className="navbar navbar-expand-sm">
                <Link className="navbar-brand" to="/Home">HOME</Link>
                <Link className="navbar-brand" to="/ProductList">ProductList</Link>
                <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link" href="#iphone" ><img style={{"width":"150px","height":"50px"}} src="http://1000logos.net/wp-content/uploads/2017/10/Logo-Samsung-png.png"/></a> </li>
                  <li className="nav-item"><a className="nav-link" href="#samsung" ><img style={{"width":"150px","height":"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5gJc6gTqQpEGlxE7Yq9sYS8M5pcmRH6UVgEJF8NeuoX1qGyw"/></a> </li>
                  <li className="nav-item"><a className="nav-link" href="#oppo" ><img style={{"width":"150px","height":"50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/OPPO_Logo.svg/1280px-OPPO_Logo.svg.png"/></a> </li>
                </ul>
              </nav>
            </div>
          </section>
          <section className="top-banner">
            <div className="row">
              <div className="col-md-12">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ul className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ul>              
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <section className="items-1">
                        <div className="row">
                          <img src="img/iphoneXI.jpg" alt="Iphone XI" style={{"width":"100%", "height":"445px"}}/>
                        </div>
                      </section>
                    </div>
                    <div className="carousel-item">
                      <section className="items-1">
                        <div className="row">
                          <img src="img/note9.jpg" alt="Samsung Galaxy Note 9" style={{"width":"100%", "height":"445px"}}/>
                        </div>
                      </section>
                    </div>
                    <div className="carousel-item">
                     <section className="items-1">
                        <div className="row">
                          <img src="img/findX.jpg" alt="Oppo Find X" style={{"width":"100%", "height":"445px"}}/>
                        </div>
                      </section>  
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#myCarousel">
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#myCarousel">
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="container-flux bot-banner">
            <div className="row">
              <div className="col-md-4">
                <div><icon class="fa fa-globe" style={{fontSize:"40px",float:"left",padding:"15px", color:"white"}}></icon>
                    <h6><b>Free shipping</b> <br/>
                    On all oders over 90$</h6> 
                </div>   
              </div>
              <div className="col-md-4">
                <div><icon class="fa fa-phone" style={{fontSize:"40px",float:"left",padding:"15px", color:"white"}}></icon>
                    <h6><b>Call Us Anything</b> <br/>
                    (+84) 0972 838 473</h6> 
                </div>                   
              </div>
              <div className="col-md-4">
                <div><icon class="fa fa-map-marker" style={{fontSize:"40px",float:"left",padding:"15px", color:"white"}}></icon>
                    <h6><b>Our Location</b> <br/>
                    77,Bach Dang street, Danang city</h6> 
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