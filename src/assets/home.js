import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeStores from '../stores/HomeStores.js';
import '../App.css';

import { Link } from 'react-router-dom';
import ProductList from './productlist';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			categorys: []
		}
	}

	componentDidMount(){
		HomeStores.on("change", () => {
	        this.setState({
	          categorys: HomeStores.getAllData()
	        });
	   	})
	}

	render(){
		const {categorys} = this.state;
		const HomeComponent = categorys.slice(0, 3).map((todo, index)=>{
			if (todo.tag == "hot") {
				return(
						<div className="col-md-4">
							<div className="card">
							  <div className="card-header">
							  	<img className="card-img-top" src={todo.image} alt="Card image" />
							  </div>
							  <div className="card-body">
							  	<h4 className="card-title">{todo.productName}</h4>
	   							<p className="card-text">{todo.manutype}</p>	
							  </div> 
							  <div className="card-footer">
							  	<Link to={`/ProductList/${todo.id}`} key={todo.id} className="btn btn-primary" onClick={(key)=>this.getDetail(key)}>See Profile</Link>
							  </div>
							</div>
						</div>			
					);	
			}
		});
		const HomeComponent1 = categorys.slice(3, 6).map((todo, index)=>{
			if (todo.tag == "hot") {
				return(
						<div className="col-md-4">
							<div className="card" key={todo.id}>
							  <div className="card-header">
							  	<img className="card-img-top" src={todo.image} alt="Card image" />
							  </div>
							  <div className="card-body">
							  	<h4 className="card-title">{todo.productName}</h4>
	   							<p className="card-text">{todo.manutype}</p>	
							  </div>
							  <div className="card-footer">
							  	<Link to={`/ProductList/${todo.id}`} className="btn btn-primary">See Profile</Link>
							  </div>
							</div>
						</div>			
					);	
			}
		});
		return(
			<div className="container">
				<div id="demo" className="carousel slide" data-ride="carousel">
					  <ul class="carousel-indicators">
					    <li data-target="#demo" data-slide-to="0" className="active"></li>
					    <li data-target="#demo" data-slide-to="1"></li>
					    <li data-target="#demo" data-slide-to="2"></li>
					  </ul>

					  <div className="carousel-inner">
					    <div className="carousel-item active">
							<section className="items-1">
								<div className="row">
									{HomeComponent}
								</div>
							</section>
					    </div>
					    <div className="carousel-item">
					      <section className="items-1">
								<div className="row">
									{HomeComponent1}
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