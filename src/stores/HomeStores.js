import React, { Component } from 'react';
import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

import axios from 'axios';


class HomeStores extends EventEmitter {
	constructor() {
		super();
		this.posts = [];
		this.getfileProduct();
		this.getUser = [];
		this.getfileUser();
	}


	getfileProduct() {
	    axios.get(`http://localhost:3000/product`)
	         .then(result => {
	      		const post = result.data;
	      		this.posts=post;
	      		this.emit("change");
	        })
	        .catch(err => {});
	}

	getAllData(){
		return this.posts;
	}

	getfileUser() {
	    axios.get(`http://localhost:3000/user`)
	         .then(result => {
	      		const getUsers = result.data;
	      		this.getUser = getUsers;
	      		this.emit("getUserID");
	        })
	        .catch(err => {});
	}

	getAllUser(){
		return this.getUser;
	}
}

const homeStores = new HomeStores();

export default homeStores;