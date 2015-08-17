import {breeze} from 'breeze';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client'
//dataservice
@inject(breeze, HttpClient)
export class DataService{
				
	constructor(breeze, http){
	
	    var serviceUrl = '';
		
		this.EntityQuery = breeze.EntityQuery;
		this.FilterQueryOp = breeze.FilterQueryOp;
		this.Predicate = breeze.Predicate;
			
			// create a manager to execute queries
		this.manager = new breeze.EntityManager( serviceUrl );
		
		this.http = http;
		//load stories
				
		this.loadStories();	
		//var initialValues = JSON.parse(json);
		//this.manager.createEntity("Employee", initialValues);
	}		
	
	loadStories(){
		return this.http.get('/json/stories_search').then(
			response => {
				var result = response.content;
				this.manager.createEntity("Stories", result );
		});	
	}
	
	searchStories( searchTerm ){
		
		var query = this.breeze.EntityQuery
						.from('Stories')
						.where('title', 'contains','s');
		
		/* 
		breeze.EntityQuery
                  .from('Customers')
                  .where('CompanyName', 'startsWith', 'c');
		*/
		
		var stories = this.manager.executeQueryLocally(query);
		
		return stories;
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
/* 
todo: breeeze for tags. work with existing tags model, 
selected tags...


*/