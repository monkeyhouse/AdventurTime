import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject( HttpClient )
export class StoryTiles{
	
	constructor(http){
		this.http = http;
        http.get('/json/stories.json').then(
			response => 
			{ 
			  this.stories = response.content;
			  console.log(response.content);
		});

	}
	
	// activate(params, routeConfig){
	// 	debugger;
	// 	return this.http.get('/json/stories.json').then(
	// 		response => 
	// 		{ debugger;
	// 			this.stories = response.content;
	// 		  console.log(response.content); }
	// 	);
	// }
}
