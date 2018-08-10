import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import ProductDetails from './ProductDetails';
import Login from './login';
import ListCart from './listCart';
import Register from './register';
import ProductList from './productList';

class Nav extends Component {
render(){
return(
	<div>
		<Switch>
			<Route exact path='/' component= {Home} />
			<Route path='/Home' component= {Home} />
			<Route path='/ProductDetails/:id' component= {ProductDetails} />
			<Route path='/Login' component= {Login} />
			<Route path='/Cart' component= {ListCart} />
			<Route path='/Register' component= {Register} />
			<Route path='/ProductList' component= {ProductList} />
		</Switch>
	</div>
		);
	}
}
export default Nav;