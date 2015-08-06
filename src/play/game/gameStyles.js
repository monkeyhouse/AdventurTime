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