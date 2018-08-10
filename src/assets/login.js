import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomeStores from '../stores/HomeStores';
import '../App.css';
import Home from './home';

import { Link } from 'react-router-dom';
import Nav from './nav_menu.js';

class Login extends Component{
	constructor(){
		super();
		this.state = {
			getUser: HomeStores.getAllUser(),
			eMail: '',
			pWd: '',
			sttLog: false
		}
	}

	componentWillMount(){
    HomeStores.on("getUserID", () => {
        this.setState({
          getUser: HomeStores.getAllUser(),
        });
      })
  	}
	

	loginUser = (event) =>{
		let eMail = this.state.eMail;
		let email = this.refs.email.value;
		let pwd = this.refs.pwd.value;
		let getUser = this.state.getUser;
		let checkUser = getUser.filter((inforuser)=>{
			if (inforuser.email === email && inforuser.password === pwd) {
				return true;
			}
		});
		checkUser.filter((nameAuser)=> {
			if (nameAuser.email) {
				this.setState({
					sttLog: true
				});
				return localStorage.setItem("nameAcc", nameAuser.email);
			}
		});
		event.preventDefault();
	}

	render(){
		return(
			<div> 
			  <div className="container">
			    <div className="row">
			      <div className="col-md-4"></div>
			      <div className="col-md-4">
			        <img  src="https://cdn.tgdd.vn/UserUpload/939706/1TT3SU.gif" className="rounded-circle" alt=""/>
			      </div>
			      <div className="col-md-4"></div>
			    </div>
			  </div>
			    <form style={{"margin": "0px 200px 200px"}} >
			      <div className="form-group">
			        <label for="email">Email address:</label>
			        <input type="email" className="form-control" ref="email" />
			      </div>
			      <div className="form-group">
			        <label for="pwd">Password:</label>
			        <input type="password" className="form-control" ref="pwd" />
			      </div>
			      <Link onClick={() => this.loginUser()} to={this.state.sttLog? "/Home": "/Login"} type="button" class="btn btn-primary">Login</Link>
			    </form>
			</div>
		);
	}
}
export default Login;