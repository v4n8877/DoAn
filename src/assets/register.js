import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import HomeStores from '../stores/HomeStores';

import Nav from './nav_menu.js';

class Register extends Component{
	constructor(){
		super();
		this.state = {
			category: [],
			id:''
		}
	}
	
	componentWillMount(){
		HomeStores.on("change", () => {
	        this.setState({
	          category: HomeStores.getAllData()
	        });
	   	})
   	}

	render(){
		return(
			<div>
				<h1>Register</h1>
				<form>
				        <div>
				            <label for="email">Email:</label>
				            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
				        </div>
				        <div>
				            <br/><label for="name">First name:</label>
				            <input type="text" className="form-control" id="1name" placeholder="" />
				            <br/><label for="name">Last name:</label>
				            <input type="text" className="form-control" id="2name" placeholder="" />
				        </div>
				        <br/><label for="gender">Sex:</label>
				        <input type="radio" name="gender" value="male" checked/> Male
				        <input type="radio" name="gender" value="female"/> Female
				        <div>
				            <br/><label for="phone">Cell number</label>
				            <input type="number" className="form-control" id="phone" placeholder="(+84) 999 999999" />
				        </div>
				        <div>
				            <br/><label for="pwd">Password:</label>
				            <input type="password" className="form-control" id="pwd" placeholder="Enter your password" pattern=".{,8}" title="8 or more characters"  />

				            <br/><label for="pwd">Retype Password:</label>
				            <input type="password" className="form-control" id="repwd" placeholder="Retype your password" pattern=".{,8}" title="8 or more characters"  />
				        </div>
				        <div>
				            <br/><label for="birth">Birthday:</label>
				            <input type="date" className="form-control"/>
				        </div>
				        <div>
				            <br/><label for="district">District:</label>
				            <input type="text" className="form-control"/>
				            <br/><label for="city">City:</label>
				            <input type="text" className="form-control"/>
				        </div>
				        <br/>
				        <button id="submit" type="submit" className="btn btn-primary">Submit</button>
				        <button className="btn btn-primary">Cancel</button>
				    </form>
			</div>
		);
	}
}

export default Register;