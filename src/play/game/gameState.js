import {HttpClient} from 'aurelia-http-client';
import {GameStyles} from './gameStyles';
import {GameThemes} from './gameThemes';

  /* created to : store game state 
      singleton scoped to a story playthough 
      
      using update pattern to preserve references to objects
*/

export class GameState{

  static inject = [HttpClient, GameThemes];
          	
  constructor(http, themeAdapter){
        
    this.pages = [];
    this.story = {};
    this.selectedPage = {};
    
    this.themeAdapter = themeAdapter;
         
    http.get("/json/pages.json").then( response =>{
        this.addRange(this.pages, response.content) 
    });
	
    http.get("/json/story.json").then( response =>{           
       this.updateValues( this.story, response.content);              
    });
    
    
  }	
    
   updateValues(obj, values){
     //Object.assign(obj, values);
     for( var key in values){
         obj[key] = values[key];
     }
   }
     
   addRange( sourceArr, values){
     var len = values.length;
     for (var i = 0; i < len; i++){
       sourceArr.push(values[i]); 
      };     
   }
		
}