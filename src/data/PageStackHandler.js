import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {lodash} from 'lodash';

@inject(HttpClient, lodash)
export class PagesStackManager{

    /* data singelton created to manage the state of a pages queue stack. 
     * sync with the segment tree as needed? calls the persistance layer
     * may use local cache? */

    constructor(http, lodash){
        this.http = http;
        this._ = lodash;
        this.pages = []; //getPages()?
    }    

    getPages(){
        if (this.pages.length > 0 ){
            return pages; //should also return promise?
        }

        return this.http.get("/json/plotpts.json").then( response =>{
            this.pages = response.content;
            this.pagesStr = JSON.stringify(response.content);
            return this.pages;
        })
    }

    getPage(page){
        return this._.find(this.pages, t => t.page === page);
    }
    
    addAction(page){
        /* created to add new action to segments*/
        var segment = this.findSegmentByPage(page);
        s.actions.push({id:0, body:'t',pageId:0 });
    }

    removeAction(page, action){
        var segment = findSegmentByPage(page);
        _.remove( segment.actions, t => t === actionObj);        
    }

 
}

/* created to manage the state of a segment tree. syncs with the persistance layer */
export class SegmentTreeManager{

}