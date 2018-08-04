import React, { Component } from 'react';
import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

import axios from 'axios';


class HomeStores extends EventEmitter {
	constructor() {
		super();
		this.posts = [];
		this.getfileProduct();
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

	findPhone = (showPhone) => {
			let lowcaseName = showPhone.toLowerCase();
			let getFinal = this.getAllData().toLowerCase().filter((getName)=>{
				if (getName.productName.indexOf(lowcaseName) !== -1) {
					return this.posts;
				}
  		});
			return this.posts = getFinal;
	}

	handleAction(action){
      switch(action.type){
        case "FIND_TODO":
          this.findPhone(action.showPhone)
          break;
        /*case "DELETE_TODO":
          this.deleteTodo(action.id)
          break;*/
      }
    }
}

const homeStores = new HomeStores();
dispatcher.register(homeStores.handleAction.bind(homeStores));

export default homeStores;