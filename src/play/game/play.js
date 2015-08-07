import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {GameState} from './gameState';
import {GameThemes} from './gameThemes';
import {GameStyles} from './gameStyles';
import $ from 'jquery';
import _ from 'lodash';


@inject(Router, GameState, GameStyles, GameThemes) 
export class Play {

    constructor(router, state, styleAdapter, themeAdapter){ 
                     
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
        this.pageId = params.pageId;    

        var storyId = this.storyId;        
        var pageId = this.pageId;
        
        //set story data;    
        if (storyId == null && this.story.title != null) 
            this.title = this.story.title;

        if ( pageId == null || this.pageId == 0 || this.pages.length == 0)
            return; 
        
        //set page data
        var pageData = _.find(this.pages, p => p.id == pageId); 
       
        //update model data
        this.actions =  pageData.actions; 
        this.page = `Page ${pageId}`;
        this.body = pageData.body;    
    }         
    
    navToPage(pageId){
        this.router.navigateToRoute("page", {pageId : pageId});
    }
 
}    
    
    
