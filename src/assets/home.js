import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeStores from '../stores/HomeStores.js';
import '../App.css';

import { Link } from 'react-router-dom';

class Home extends Component {

	constructor(){
		super();
		this.state = {
			categorys: HomeStores.getAllData(),
			emptyCart:[],
				id: '',
				image: '',
				productName: '',
				price: '',
				quantity: ''
		}
	}
  
	componentDidMount(){
		HomeStores.on("change", () => {
	        this.setState({
	          categorys: HomeStores.getAllData(),
	        });
	   	})
	}

	setCart(itemCart, newCart, emptyCart) {
		itemCart.forEach( (element)=> {
			newCart.id = element.id;
			newCart.image = element.image;
			newCart.productName = element.productName;
			newCart.price = element.price;
			newCart.quantity = +1;
			emptyCart.push(newCart);
			this.setState({
				emptyCart: emptyCart,
			});
			return false;
		});
	}

	addCart = (i) =>{
		let category = this.state.categorys;
		let emptyCart = this.state.emptyCart;
		let sttStore = this.sttStore;
		let id = this.state.id;
		let idc = i;
		let image = this.state.image;
		let productName = this.state.productName;
		let price = this.state.price;
		let quantity = this.state.quantity;
		let newCart = {id, image, productName, price, quantity};
		let itemCart = category.filter((getList)=>{
			if (getList.id == idc) {
				return true;
			}
		});
		if (emptyCart.length == 0) {
			this.setCart(itemCart, newCart, emptyCart);
			localStorage.setItem("listCart", JSON.stringify(emptyCart));	
		}
		else if ( emptyCart.length !== 0) {
			var index ;
			var check = true ;
			emptyCart.filter((element, ind)=> {
				if (element.id == idc){
					index = ind;
					newCart.id = element.id;
					newCart.image = element.image;
					newCart.productName = element.productName;
					newCart.price = element.price;
					newCart.quantity = parseInt(element.quantity) +1;
					emptyCart[index] = newCart;
					this.setState({
						emptyCart: emptyCart	
					});
					check = false;
					return false;
				}
				
			});
			if (check) {
					this.setCart(itemCart, newCart, emptyCart);
				}

			localStorage.setItem("listCart", JSON.stringify(emptyCart));
		}
	}

	render(){
		const {categorys} = this.state;
		const HomeComponent = categorys.filter((itemCard)=>{
			if (itemCard.tag === "hot") {
				return true;
			}
		});

		const getIner = HomeComponent.slice(0, 3).map((itemCard) =>{
          return (
            <div className="col-md-4">
              <div className="card" key={itemCard.id}>
                <div className="card-header">
                    <Link to={`/ProductDetails/${itemCard.id}`}><img className="card-img-top" src={itemCard.image} /></Link>
                    <img className="hot-tag" src="img/hottag.png"/>
                </div>
                <div className="card-body">
                    <Link to={`/ProductDetails/${itemCard.id}`}><h4 className="card-title" ref="nameCard">{itemCard.productName}</h4></Link>
                    <h5 style={{"text-align": "center"}} >{itemCard.price}</h5>  
                </div>
                <div className="card-footer">
                    <button type="button" key={itemCard.id} className="btn btn-primary" onClick={()=>this.addCart(itemCard.id)}>Add to cart</button>
                </div>
              </div>
            </div>
          );
        });

	    const getIner_1 = HomeComponent.slice(3, 6).map((itemCard) => {
          return (
            <div className="col-md-4">
              <div className="card" key={itemCard.id}>
                <div className="card-header">
                    <img className="card-img-top" src={itemCard.image} />
                    <img className="hot-tag" src="img/hottag.png"/>
                </div>
                <div className="card-body">
                    <Link to={`/ProductDetails/${itemCard.id}`}><h4 className="card-title" ref="nameCard">{itemCard.productName}</h4></Link>
                  	<h5 style={{"text-align": "center"}} >{itemCard.price}</h5>     
                </div>
                <div className="card-footer">
                    <button type="button" key={itemCard.id} className="btn btn-primary" onClick={()=>this.addCart(itemCard.id)}>Add to cart</button>
                </div>
              </div>
            </div>
          );
	    });

		return(
			<div className="container">
				<div id="demo" className="carousel slide" data-ride="carousel">
					  <ul className="carousel-indicators">
					    <li data-target="#demo" data-slide-to="0" className="active"></li>
					    <li data-target="#demo" data-slide-to="1"></li>
					  </ul>
					  <div className="carousel-inner">
					    <div className="carousel-item active">
							<section className="items-1">
								<div className="row">
									{getIner}
								</div>
							</section>
					    </div>
					    <div className="carousel-item">
					      <section className="items-1">
								<div className="row">
									{getIner_1}
								</div>
							</section>
					    </div>
					  </div>
					  <a className="carousel-control-prev" href="#demo" data-slide="prev">
					    <span className="carousel-control-prev-icon"></span>
					  </a>
					  <a className="carousel-control-next" href="#demo" data-slide="next">
					    <span className="carousel-control-next-icon"></span>
					  </a>
				</div>
			</div>
		);
	}
}
export default Home;