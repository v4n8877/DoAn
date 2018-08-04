import dispatcher from "../dispatcher";

export function findPhone(showPhone){
	//..body
	dispatcher.dispatch({
		type:"FIND_TODO",
		showPhone
	});
}