import {bindable} from 'aurelia-framework';
export class Pager{
	
	/* created  for client side pagoing 
	   create to :  display a  pager ,
	   				returns a sliced array 
					mamnges current page 					
	    to do: ability to work with async paging? promsized array, or number
		eg fxn or promize? that returns PagingResult = { items :  , page: 2 , itemsCount : 100, itemsPerPage : 23}
		*/
 
    //
	@bindable page = 1;
	@bindable itemsPerPage = 4;		
	@bindable items = [];
	@bindable pageOfItems = [];

	//view properties	
	pages = 0;
	isFirst = false;
	isLast  = false;

	itemsCount = 0;
		
	itemsChanged(newValue){
		this.page = 1;
		this.itemsCount = newValue.length;
		this.calcViewProps(this.page, this.itemsCount, this.itemsPerPage);
	}
		
	//compute view specs
	calcViewProps(page, itemsCount, itemsPerPage){
		
		if (itemsCount == 0){
			this.isFirst = false;
			this.pages = 0;
			this.isLast = false;			
			this.pageOfItems = [];
			
			return;
		}
		
		var numPages = Math.ceil(itemsCount / itemsPerPage);
		this.pages = numPages;
		this.isFirst = page == 1;		
		this.isLast  = page  == numPages;
		
		
		var firstItem = (this.page - 1) * this.itemsPerPage;
		var lastItem = Math.min( this.page * this.itemsPerPage, this.itemsCount);		
		this.pageOfItems = this.items.slice(firstItem, lastItem);		
	}

	pageChanged(){
		this.calcViewProps(this.page, this.itemsCount, this.itemsPerPage);
		
	}	
	next(){
		if (this.page < this.pages) this.page = this.page + 1;
	}
	previous(){
		if (this.page > 0) this.page = this.page - 1;
	}
	
	first(){
		this.page = 1;
	}
	
	last(){
		this.page = this.pages;
	}
	
	
	
}