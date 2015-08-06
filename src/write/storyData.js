import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class StoryData{

    /* data singelton created to manage the state of a story and pages tree.
     * initially, use local cache to keep data
     * todo: call the persistance layer as needed */

    constructor(http){
        this.http = http;
        this.pages = []; 
        this.stories = [];
        this.storyId = 1;
    }    
    
    //return a list of all user stories
    getStories(){
        if (this.stories.length > 0 ){
             return new Promise( (resolve, reject) => resolve(this.stories));
         }
        return this.http.get("/json/stories.json").then( response =>{
            this.stories = response.content;
            return this.stories;
        });
    }
    
    

    getPages(){
        // return this.pages;
        if (this.pages.length > 0 ){
            console.log(this.pages);
             return new Promise( (resolve, reject) => resolve(this.pages));
         }
        return this.http.get("/json/pages.json").then( response =>{
            this.pages = response.content;
            return this.pages;
        });
    }

}
// 
//     getPage(pageId){
//         var _ = lodash;
//         return _.find(this.pages, t => t.id === pageId);
//     }
     

