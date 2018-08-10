import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import HomeStores from '../stores/HomeStores';

class ProductList extends Component{
	constructor(){
		super();
		this.state = {
			category: HomeStores.getAllData()
		}
	}
	
	componentWillMount(event){

		HomeStores.on("change", () => {
	        this.setState({
	          category: HomeStores.getAllData()
	        });
	   	})
	}

	render(){
		const {category} = this.state;
		const showProduct = category.slice(0, 5).map((proList)=>{
        	if(proList.productID === 'samsung'){
        		return (        			
				    <div className="container">
				     	<div className="d-inline-flex">  
					      	<div className="card">
					           <img className="card-img-top" src={proList.image} />
					           <div className="card-body">
					             <h4 className="card-title">{proList.productName}</h4>
					             <p className="card-text">{proList.detail}</p>
					           </div>
					        </div>
				    	</div>
				    </div>
        		);
        	}
        });
		return(
			<div>
				<section style={{"backgroundColor": "white"}}>
					<span id="samsung"><img  style={{"width":"250px","height":"80px"}} src="img/samsung.jpg"/></span>
					<div className="row">
						{showProduct}
					</div>
				</section>
			</div>
		);
	}
}
export default ProductList;