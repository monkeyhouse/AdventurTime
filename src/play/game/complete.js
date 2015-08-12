import {inject} from 'aurelia-framework';
// import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import $ from 'jquery';
import _ from 'lodash';
import {GameState} from './gameState';
import {GameThemes} from './gameThemes';
import {GameStyles} from './gameStyles';



@inject(Router, GameState, GameStyles, GameThemes) /* HttpClient, Router,  */
export class Cover {

    constructor(router, state, styleAdapter, themeAdapter){ /* http, router,  */
                     
        this.router = router;        
        this.themeAdapter = themeAdapter;
        this.gameState = state;
        this.styleAdapter = styleAdapter;

        //load data from gamestate
        this.story = state.story;
        this.styles = styleAdapter.styles;   
        
        
        this.summary = 'Placeholder Summary';        
        this.title = 'Placeholder Title';   
        this.authors = [{name:'Placeholder Author', image:'asdf124124', id:'12312'}];
        
    }
    
    
    activate(params){        
        this.storyId = 1;
        this.pageId = 0;       
                //set story data;    
        if (this.storyId != null && this.story.title != null){ 
            this.title = this.story.title; 
        
            //todo: makme url incorporate story, pageId, correct base url...
            this.shareUrl = "www.cometgames.com/read/complete"; //todo: gen from route;
            this.shareMessage = `I enjoyed playing ${this.title} on Story Time Adventures Community Edition. You can play too at ${this.shareUrl}`;   
            this.hideSell = true;
        }
     }
  
      
    start(){
        //todo: nav to page one
         this.router.navigateToRoute("page", {pageId : 1}); 
    }
    
}    
    
    
