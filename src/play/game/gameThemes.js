import $ from 'jquery';
import _ from 'lodash';

/*  Game Theme UI Adapter
singleton created to manage game theme ui applications */

export class GameThemes{
     
     constructor(){
          var themes = [ { name : 'Light', value: 'light-game-theme'},
                       { name : 'Dark', value:'dark-game-theme'},
                       { name: 'None', value: ' '}];  

          this.themes = themes;
          this.theme = ' ';         
     }

     applyTheme( cssClass ){
         this.theme = cssClass;
         this.removeTheme();

         //note : needs body to be ready before can apply theme, if use jquery, it dealys enough
         $('body').addClass(cssClass);
         // otherwise...
         // var body = document.getElementsByTagName('body')[0];
         // body.classList.add( cssClass );
     }

     removeTheme(){           
         //removes all classes from body which contain string 'game-theme'
        
         var body = $('body'); //document.getElementsByTagName('body')[0];
         var classes =  body[0].classList;

         if (classes != null && classes.length > 0){
           
           for(var i in classes){
              if ( typeof (classes[i]) != 'string')  continue;
    
              if  ( classes[i].indexOf('game-theme') > 0)
                 body.removeClass( classes[i] );
                               
           }
         }         
      }  
  
      cycleTheme(){
            this.removeTheme();
            var ix = _.findIndex(this.themes, f => f.value == this.theme );
            var ix_next = (ix + 1) % (this.themes.length );
            this.applyTheme( this.themes[ix_next].value );
            return this.theme;
      }
}