import $ from 'jquery';

//created to manage styles while playing game
//styles memeory adapter
/*exposes object styles 
    also exposes themesClass
*/

export class GameStyles{
	

	constructor(){

        this.styles = {
            fontFamily : ' ',
            fontSize : ' ',
            lineHeight : ' ',
            margin : ' ',
            theme : ' '          
        }
        
        this.localStorageKey = 'play-style-preferences'; 
         
        
	}
	
    applyStyles( styleObj ){
        /* apply all values in stye object */
        var body = document.getElementsByTagName("body")[0];
        for(var key in styleObj){
            if (typeof(styleObj[key]) == 'string' && styleObj[key].trim() != ''){
                body.classList.add( styleObj[key] );
            }
        }
    }
    
    removeStyles(){       
      /* remove styles that start with gt- */ 
      var body = document.getElementsByTagName("body")[0];
      var classList = body.classList;
       
       for(var i in classList){
          if ( typeof (classList[i]) != 'string')  continue;

          if  ( classList[i].indexOf('gt-') > 0)
             body.removeClass( classList[i] );                           
       }
    }
    
	// retrieve style preferences from local history 
	loadStyles(){
       
       return new Promise( (resolve, reject) => {
           
	   var prefsJSON = window.localStorage.getItem(this.localStorageKey);
       
           if (prefsJSON != null){
                var prefs =  JSON.parse(prefsJSON);
                this.styles.fontFamily = prefs.fontFamily ;
                this.styles.fontSize = prefs.fontSize ;
                this.styles.lineHeight = prefs.lineHeight ;
                this.styles.margin = prefs.margin;
                this.styles.theme = prefs.theme;
           }
         
           resolve(this.styles);
          
       });   
	}
	

    //store style preferences intp local history    
    storeStyles( pStyles ){
     
        var props = pStyles;
        var prefs = {
            fontFamily : props.fontFamily,
            fontSize : props.fontSize,
            lineHeight: props.lineHeight,
            margin : props.margin,
            theme : props.theme 
        };
        
        window.localStorage.setItem(this.localStorageKey,
            JSON.stringify( prefs ));
    }
	
}