import {inject} from 'aurelia-framework';
import {GameState} from './gameState';
import {GameThemes} from './gameThemes';
import {GameStyles} from './gameStyles';


@inject( GameState, GameStyles, GameThemes) 
export class Router{

    constructor( state, styleAdapter, themeAdapter){                    
       this.gameState = state;
       this.styleAdapter = styleAdapter;
       this.themeAdapter = themeAdapter;
       
        //load story data from gamestate
        this.story = state.story;
        this.styles = styleAdapter.styles;         
    }
    
    configureRouter(config, router){
        config.map([
            
            { route: ['','cover'], name: 'begin',  moduleId: './cover', nav: false } ,
            { route: 'page/:pageId', name: 'page',  moduleId: './play', nav: false } 
            
        ]); 

        this.router = router;
    }
    
    activate(){
        return this.styleAdapter.loadStyles().then( response => {
            //apply styles
           this.styles = response;
           this.themeAdapter.applyTheme( this.styles.theme ); 
           this.styleAdapter.applyStyles( this.styles );
         });
    }
    
    canDeactivate(){
        //grab styles from body
        this.styleAdapter.storeStyles( this.styles );
        this.styleAdapter.removeStyles();
        this.themeAdapter.removeTheme();
        return true;   
    }

     
    cycleTheme(){
        var theme = this.themeAdapter.cycleTheme();
        this.styles.theme = theme;
    }
 

}