import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import lodash from 'lodash';

@inject(HttpClient)
export class Overview {

    constructor(http){
        this.http = http;
        this.iter = 0;
        this.selectedPage = null;
        this.showPageEditor = false;
    }
    
    
    activate(){
        return this.http.get("/json/pages.json").then( response =>{
          
            this.pages = response.content;
        })
    }
       
    editPage(page){
        this.selectedPage = page;
        this.showPageEditor = true;
    }
    
    hidePageEditor(){        
        console.log("hidePageEditor")
        this.showPageEditor = false;
    }


}