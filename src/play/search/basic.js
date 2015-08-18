import {HttpClient} from 'aurelia-http-client';
import {inject, computedFrom} from 'aurelia-framework';
import _ from 'lodash';
import breeze from 'breeze';
import {StoriesDataService} from './../../data/StoriesDataService';
import {Router} from 'aurelia-router';

@inject(StoriesDataService, Router)
export class Basic{
	
	searchText = '';
	sr = {};
	_page = 1;
	
	constructor(dbService, router){
		this.dbService = dbService;
		this.router = router;
	}
	
	activate(params){		
		if (params.page !== undefined && params.searchTerm !== undefined){
			this._searchText = params.searchTerm;
			this._page = params.page;
		}
	}
	
	_searchText = '';
	search(){			
		this._searchText = this.searchText || '';
		this.execSearch( this._searchText );		
	}
	

	set page(value){		
		this._page = value;		
		this.execSearch( this._searchText , value);
	}
	
	@computedFrom('_page')
	get page(){
		return this._page;
	}
	
	execSearch( searchTerm, page = 1){
		var stories = this.dbService.search( searchTerm, page );		
		
		stories.then(
			searchResult => { 
				this.sr = searchResult;
				this._page = searchResult.page;
				this.stories = searchResult.items;
			}
		)
				
		
		$('.page-host').scrollTop(0);
		//this.router.navigate("/play/search", {page : value, searchTerm : this._searchText  });		
	}
}

