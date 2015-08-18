import breeze from 'breeze';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client'
import {DbConfig} from './DbConfig';
//dataservice
@inject(breeze, HttpClient, DbConfig)
export class StoriesDataService{
				
	constructor(breeze, http, dbConfig){
	
		var serviceName = "Stories";
	    var serviceUrl = dbConfig.GetServiceUrl( serviceName );
		
		this.serviceUrl = serviceUrl;
		this.EntityQuery = breeze.EntityQuery;
		this.FilterQueryOp = breeze.FilterQueryOp;
		this.Predicate = breeze.Predicate;
		this.breeze = breeze;
			
			// create a manager to execute queries
		this.manager = new breeze.EntityManager( serviceUrl );
		
		this.http = http;
		//load stories
				
		this.loadStories();	
		//var initialValues = JSON.parse(json);
		//this.manager.createEntity("Employee", initialValues);
		window.DataService = this;
	}		
	
	loadStories(){
		
		var query = this.EntityQuery.from('Stories')
					.take(10);
		
		this.manager.executeQuery(query).then( data =>
			 console.log(data)
		);			
	}
	
	
	search( searchTerm, page ){
	
	    var ps = new PagingSettings({ page: page });
			
		var predicate = this.Predicate.create('Title', this.FilterQueryOp.Contains ,searchTerm)
						.or('Summary', this.FilterQueryOp.Contains , searchTerm);
		
		var query2 = this.EntityQuery
						.from('Stories')
						.where(predicate)
						.orderBy('ID')
						.inlineCount()
				 		.skip ( ps.skip )
						.take( ps.itemsPerPage );
		
		var stories = this.manager.executeQuery(query2);
		
		var result = stories.then(
			data => 
			 new SearchResult( {
				  page: ps.page,
				  itemsPerPage:ps.itemsPerPage,
				  itemsCount: data.inlineCount,
				  items: data.results   })
		).then(
			res => {
			console.log(res)
			return res; }
		);
		
		
		return result;
//		return stories;
	}
	
	searchStoriesAdv( searchObj){
		return '';
	}
}


export class AdvancedSearchTerms{
	title = '';
	summary = '';
	tags = [];
	users = [];
	
	constructor(data){
		Object.assign(this, data);
	}
}


export class SearchResult{	
	//assign 
	// this.items
	// this.page
	// this.itemsPerPage
	// this.itemCount
	page = 0;
	itemsPerPage = 0;
	itemsCount = 0;
	items = [];
	
	pages = 0;
	
	
	constructor(data){
		Object.assign(this, data);

		if (this.itemsPerPage > 0 ){
			this.pages = Math.ceil( this.itemsCount / this.itemsPerPage);
		}
	}
	
}

export class PagingSettings{
	page = 1;
	itemsPerPage = 10;
	skip  = 0;
	constructor(data){
		Object.assign(this, data);
		
		if (this.page >= 1){
			this.skip = (this.page - 1) * this.itemsPerPage
		}
	}
}

/* 
todo: breeeze for tags. work with existing tags model, 
selected tags...


*/
