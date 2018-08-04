import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import HomeStores from '../stores/HomeStores';
import {Autocomplete} from 'react-autocomplete';

import Nav from '../assets/img/nav_menu.js';
import Home from './home';

class ProductList extends Component{
	constructor(){
		super();
		this.state = {
			category: [],
			id:''
		}
	}
	
	componentWillMount(){
		let id = this.props.match.params.id;
		this.setState({
	          id: id
	        });
		HomeStores.on("change", () => {
	        this.setState({
	          category: HomeStores.getAllData()
	        });
	   	})
    	
	}

	render(){
		const {id, category} = this.state;
		const showDetails = category.map((todo)=>{
        	if(todo.id === id){
        		return (
        			<h1 key={todo.id}>{todo.productName}</h1>
        		);
        	}
        });
		return(
			<div>
				{showDetails}
			</div>
		);
	}
}
export default ProductList;