import {inject} from 'aurelia-framework';
// import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
import $ from 'jquery';
import _ from 'lodash';
import {GameState} from './gameState';
import {GameThemes} from './gameThemes';
import {GameStyles} from './gameStyles';


import {json} from './valueConverters';

@inject(Router, GameState, GameStyles, GameThemes) /* HttpClient, Router,  */
export class Play {

    constructor(router, state, styleAdapter, themeAdapter){ /* http, router,  */
                     
        this.router = router;        
        this.themeAdapter = themeAdapter;
        this.gameState = state;
        this.styleAdapter = styleAdapter;

        //load data from gamestate
        this.story = state.story;
        this.pages = state.pages;
        this.currentPage = state.currentPage;             
        this.styles = styleAdapter.styles;         


    }
    

    
    activate(params){        
        console.log('activated');        
        this.storyId = 1;
        this.pageId = 0;        
    
        //reapply theme, styles after navigation & reactivate      
        return this.styleAdapter.loadStyles().then( response => {
           this.styles = response;
           this.themeAdapter.applyTheme( this.styles.theme );     
        });
    }
    
    attached(){
        this.updateModel();
    }
         
    
    canDeactivate(){
        this.styleAdapter.storeStyles( this.styles );
        this.themeAdapter.removeTheme();
        return true;   
    }

    detached(){
        this.themeAdapter.removeTheme();
    }

    navToPage(pageId){
        this.router.navigateToRoute("readp", {pageId : pageId});
    }
  
    navToPageOne(){
        //todo: nav...    
    }
    
    updateModel(){
        var storyId = this.storyId;        
        var pageId = this.pageId;
        
        //set story data;    
        if (storyId == null && this.story.title != null) 
            this.title = this.story.title;

        if ( pageId == null || this.pages.length == 0)
            return; 
        
        //set page data
        var pageData = _.find(this.pages, p => p.id == pageId); 
       
        //update model data
        this.actions =  pageData.actions; 
        this.page = `Page ${pageId}`;
        this.body = pageData.body;
    }
      
    cycleTheme(){
        var theme = this.themeAdapter.cycleTheme();
        this.styles.theme = theme;
    }
 
}    
    
    
