import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeStores from '../stores/HomeStores';
import '../App.css';

import { Link } from 'react-router-dom';

class ListCart extends Component {
	constructor(){
		super();
		this.state = {
			cart: [],
		}
	}

	componentWillMount(){
		let listCart = localStorage.getItem("listCart");
		let getCart = JSON.parse(listCart);
		let cart = this.state.cart;
		if (getCart == null) {
			this.setState({
	          cart: cart
	        });
	        return true;
		}
		else{
		this.setState({
          cart: getCart
        });
		}
  	}

	render(){
		const { cart, sttLog } = this.state;
 		const showCart =  cart.map((itemCard) =>{
 				return (
	 				<div>
		 				<tr key={itemCard.id}>
		 					<td className="col-md-4">
		 						<div>
		 							<img className="imgCard" src={itemCard.image} />
		 						</div>
		 						<div className="col-md-8">
		 							{itemCard.productName}
		 						</div>
		 					</td>
		 					<td>{itemCard.price}</td>
		 					<td>
		 						<div>
		 							<button><i class="fa fa-minus"></i></button>
		 							<input type="text" value= {itemCard.quantity} />
		 							<button><i class="fa fa-plus"></i></button>
		 						</div>
		 					</td>
		 					<td>{itemCard.price}</td>
		 				</tr>
	 				</div>
	 			);
 		});

		return (
			<div className="container">
				<table className="table table-striped">
				    <thead>
				      <tr>
				        <th>Product Name</th>
				        <th>Price</th>
				        <th>Quantity</th>
				        <th>Total</th>
				      </tr>
				    </thead>
				      {showCart}
				</table>
			</div>
		);
	}
}
export default ListCart;