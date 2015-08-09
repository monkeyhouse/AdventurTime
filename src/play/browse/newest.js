import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Popular{
	
    constructor(http){
		this.http = http;
        http.get('/json/stories.json').then(
			response => 
			{ 
			  this.stories = response.content;
			});
	}
    
}
