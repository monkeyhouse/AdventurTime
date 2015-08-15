import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Trending{
	
    constructor(http){
		this.http = http;
        http.get('/json/stories.json').then(
			response => 
			{ 
			  this.stories = response.content;
			  
			  
			  //construct links			  
			  var stories = this.stories;
			  for(var story in stories){
				 
				//  var url = ...;
				  
			  }
			});
	}
    
}
