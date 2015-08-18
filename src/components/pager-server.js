import {bindable} from 'aurelia-framework';
export class PagerServer{
	
	/* created  for server side pagoing 
	   create to :  display a  pager
	   tighly coupled to searchResult class 
	 */
 
    //
	
	@bindable page = 1;
	@bindable pages;
	@bindable itemsCount;

	@bindable onPageChanged = (page) => console.log(' Page changed event fired from pager. ');
	
	pageChanged(newVal, oldval, arg){
		//fired when page is changedchange callback
		this.onPageChanged(newVal);
		this.calcViewProps(this.page, this.pages, this.itemsCount);
	}

	calcViewProps(page, pages, itemsCount){
		
		if (itemsCount == 0){
			this.isFirst = false;
			this.isLast = false;			
			return;
		}
		
		this.isFirst = page == 1;		
		this.isLast  = page  == pages;				
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
		this.page =  this.pages;
	}
	
	
	
}