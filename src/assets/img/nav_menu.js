import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Home from '../home.js';
import ProductList from '../productlist.js';

class Nav extends Component {
render(){
return(
	<div>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/productlist" component={ProductList} />
		</Switch>
	</div>
		);
	}
}
export default Nav;