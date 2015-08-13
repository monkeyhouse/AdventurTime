export class Page{
	id = 0;
	page = 0;
	body = '';
	actions = []; //id, body, pageId
	
	constructor(data){
		Object.assign(this, data);
	}
}

export class Action{
	id = 0;
	body = '';
	pageId = 0;
}