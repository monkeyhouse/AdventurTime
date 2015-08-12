import {inject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {CssAnimator} from 'aurelia-animator-css';
import {ObserverLocator} from 'aurelia-binding';
import lodash from 'lodash';
import $ from 'jquery';

@inject(HttpClient, CssAnimator)
export class Edit{
    @bindable page = null;
    @bindable pages = null;

    heading = 'Editor';
    
    constructor(http, animator){
        this.http = http;
        this.animator = animator;
        this.iter = 0;
        this.showEditor = false;
    }
   

    getNextPage(action){
        var nextPageId = action.pageId;
        var _ = lodash;
        this.prevPage = this.page;              
        this.page = _.find(this.pages, p => p.id == nextPageId);
                
    }

    createNextPage(action){
        
       this.transition();
  
        //post to server, createPage(int storyId, int actionId,)       
        // then set pageId to returned pageId, else toast error? delete new page, go back
        //... get back pageId
        var pageId = ++this.iter ; 
        // push new page to tree     
        var newPage = { id:pageId, body:'', actions: [] };
        action.pageId = pageId;

        this.pages.push( newPage );
        this.page = newPage;
    }
    
    
    createAction(){        
        // createAction(storyId, pageId), then set proper actionId (this.storyId, this.page.id)
        // post to server to creaet action, if success set proper action id, else toast, fail, delete action
        //then { newAction.Id = reseponse.idval; this.newAction = null; //lose reference }
        var actionId = Math.random();

        var newAction = { id:actionId, body:'', pageId:0 };        
        this.page.actions.push( newAction );        
    }

    deleteAction(action){        
        //post to notify server 
        // then remove...  when error then toast
        var _ = lodash;
         _.remove( this.page.actions, a => a === action);
      
                
    }

    canDeactivate(){        
        if (JSON.stringify(this.segments) != this.segmentsStr ){
            return confirm('There are unsaved changes. Reloading this page will reset all changes. Are you sure you want to leave?');
        }
    }
    
}