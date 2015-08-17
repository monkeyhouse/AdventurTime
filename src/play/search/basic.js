import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import _ from 'lodash';
import breeze from 'breeze';

export class Basic{
	
	constructor(){
		
	}
}



// created to search server for results
@inject(HttpClient)
export class StoriesSearch{
	
	constructor(http){
		this.http = http;
	}
	
	//basic search : seaches title & summary for results
	//returns : search result with of stories
	basicSearch( searchTerm ){
		
	}
	
	advancedSearch( title, summary, tags, users){
		
	}
	
}

@inject(HttpClient)
export class StoriesJsonData{
	constructor(http){
		this.http = http;
	
	}	
	
	searchStories( searchTerm ){
		  // http.get('/json/stories.json').then(
			// response => 
			// { 
			//   this.stories = response.content;
			  
	    //var qText = searchTerm.toUpperCase();		
		var reg = new RegExp(searchTerm.trim(), 'i');
		
		return this.http.get('/json/stories_search').then(
			response => {
								
			return response.filter( t => {	return reg.test(t.title) || reg.test(t.summary); });				               
				
		});
	}
	
	searchStoriesAdv( titleSearchTerm, summarySearchTerm, authorIDs, tagIDs){
		
		var regTitle = new RegExp((titleSearchTerm || '').trim(), 'i');
		var regSummary = new RegExp((summarySearchTerm || '').trim(), 'i');
		// 
		// var filter = story => ({
		// 	if ()
		// 	titleSearchTerm == '' ?
		// });
		
			
		var query = new breeze.EntityQuery();
		
		return this.http.get('/json/manyStories').then(
			response => 			
			 {
				return response.filter( t => true);
			});
	}
}

