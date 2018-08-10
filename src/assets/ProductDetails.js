import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import HomeStores from '../stores/HomeStores.js';

class ProductDetails extends Component{
	constructor(){
		super();
		this.state = {
			category:  HomeStores.getAllData(),
			id:''
		}
	}
	
	componentWillMount(){
		HomeStores.on("change", () => {
	        this.setState({
	          categorys: HomeStores.getAllData()
	        });
	   	})
		let id = this.props.match.params.id;
		this.setState({
	          id: id
	        });
	}
	
	render(){
		const {id, category} = this.state;
		const showDetails = category.filter((detailsitem)=>{
        	if(detailsitem.id == id){
        		return true;
        	}
        });
		const itemDetails = showDetails.map((details)=>{
			return (
				<div className="container">
					<div>
						<h1>{details.productName}</h1>
					</div>
					<div className="container">
						<div className="row" key={details.id}>
							<div className="col-md-8">
								<img style={{width: "100%"}} src={details.imgFull} alt="imgFull"/>	
							</div>
							<div className="col-md-4">
								<img src={details.specs} alt=""/>
							</div>
						</div>
						<hr/>
						<div>
							<h3>&nbsp; &nbsp; &nbsp;{details.detail}</h3>
							<h4><i>&nbsp;&nbsp;&nbsp; {details.description}</i>.</h4>
						</div>
					</div>
				</div>
			);
        });
		return(
			<div>
				{itemDetails}
			</div>
		);
	}
}
export default ProductDetails;