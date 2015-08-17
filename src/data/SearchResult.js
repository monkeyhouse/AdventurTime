
export class SearchResult{	
	page = 0;

	items = [];
	itemsPerPage = 0;
	itemCount = 0;
	
	pages = 0;
	
	constructor(data){
		Object.assign(this, data);

		if (this.itemsPerPage > 0 ){
			this.pages = Math.ceil( this.itemCount / this.itemsPerPage);
		}
	}
	
}
