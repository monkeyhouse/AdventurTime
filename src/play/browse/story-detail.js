import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class StoryDetail{
	
    constructor(http){
		this.http = http;
        http.get('/json/story.json').then(
			response => 
		{ 
			  this.story = response.content;
		});
	}
    
}
