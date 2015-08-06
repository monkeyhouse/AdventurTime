import {inject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
//import {GameStyles} from './gameStyles';

import lodash from 'lodash';

/*created to: choose text formating for a div
 passes out classes that can be bound to div and buttons */
     
export class TextStyles {
    @bindable styles;

    constructor(){
//        this.gameStyles = gameStyles;
    
        var fontSizes = [ 'font-size:.8em;','font-size:1em;' ,'font-size:1.2em;', 'font-size:1.4em;', 'font-size:1.8em;', 'font-size:2.0em;'];
        
        var fontFamilies = [  { name : "Courier New", value:"font-family:‘Courier New’, Courier, monospace;"},                             
                              { name : "Helvetica Nueue", value:" "}, //default                             
                              { name : "Impact", value:"font-family:Impact, Charcoal, sans-serif;"},
                              { name: 'Lucida Unicode', value: "font-family:‘Lucida Sans Unicode’, ‘Lucida Grande’, sans-serif;"},
                              { name: "Palatino", value : "font-family:‘Palatino Linotype’, ‘Book Antiqua’, Palatino, serif;"},
                              { name: "Tahoma", value:"font-family:Tahoma, Geneva, sans-serif;"}];
                             

        var lineHeights = [ 'line-height:1.45em', 'line-height:1.8em', 'line-height:2.0em'];

        var margins =  [  {name: 'Newspaper', value:'max-width:400px;'},
                          {name: 'Paperback', value:'max-width:700px;'},
                          {name: 'Wide', value:' '},
                          {name: 'Page Fit', value:'width:100%; margin:0;'} ];

        
        this.fontSizes = fontSizes;
        this.fontFamilies = fontFamilies;
        this.lineHeights = lineHeights;
        this.margins = margins;              
     }
     
     activate(){
          
        //notes, defaults must match default values w/ any alterations
        var defaults = {
            fontSize : this.fontSizes[1],
            fontFamily : this.fontFamilies[1].value,
            lineHeight : this.lineHeights[0],
            margin : this.margins[2].value
        };
        
            
        this.fontFamily = this.fontFamily || defaults.fontFamily;
        this.fontSize =  this.fontSize || defaults.fontSize;
        this.lineHeight = this.lineHeight || defaults.lineHeight;
        this.margin = this.margin || defaults.margin;
        
        var that = this;
        this.styles = {
            fontFamily : that.fontFamily,
            fontSize : that.fontSize,
            lineHeight : that.lineHeight,
            margin : that.margin
        };

     }
     
}    
    
          
        //store like...
        /* 
        fontSize : 'font-Size:1em',
        fontfamily : 'font-family:Trebuchet Ms......',
        lineHeight : 'line-height:106em
        margin : 'width:...
        
        when load try to match on value
        if not found, use defaults
        
        double bind so that it will change the defaults ot he preets if none are selected
        
        store presets in localhistory on outside (which knows the page context)
        */
        
        
        //output return classes
        
        
        //this.router = router;
        
        // generate font options arrays
        // font families
        // font sizes, line spacing, margins?
        
        //should al tie to css classes?
        //alt: tie diretly to inline-styles... hmm,
        // later has less dependencies so should probably choose...,
        // but classes is cleaner I think
 
