import {inject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Router} from 'aurelia-router';
//import {GameStyles} from './gameStyles';

import lodash from 'lodash';

/*created to: choose text formating for a div
 passes out classes that can be bound to div and buttons */
     
export class TextStyles {
    @bindable styles;

    applyToBody( cssClass ){
        var body = document.getElementsByTagName('body')[0];    
        body.classList.add(cssClass);
    }
    
    removeFromBody( cssClass ){
        if (cssClass.trim() == '') return;
        
        var body = document.getElementsByTagName('body')[0];    
        body.classList.remove(cssClass);       
    } 
    
    swapStyle( propName, newValue ){
        this.removeFromBody( this.styles[propName]);
        this.styles[propName] = newValue;
        this.applyToBody(newValue); 
    }
    
    setFontSize( f ){  this.swapStyle('fontSize', f); } 
    setFontFamily( f ){ this.swapStyle('fontFamily', f.value);}    
    setLineHeight( f ){ this.swapStyle('lineHeight', f ); }
    setMargin( m ){ this.swapStyle('margin', m.value);}    
    
    constructor(){  
    this.fontSizes = [ 'gt-fs-08', 'gt-fs-10', 'gt-fs-12', 'gt-fs-14', 'gt-fs-18', 'gt-fs-20'];
    
    this.fontFamilies = [  { name : "Courier New", value:"gt-ff-Courier"},                             
                          { name : "Helvetica Nueue", value:"gt-ff-Helvetica"}, //default                             
                          { name : "Impact", value:"gt-ff-Impact"},
                          { name: 'Lucida Unicode', value: "gt-ff-Lucida"},
                          { name: "Palatino", value : "gt-ff-Palatino"},
                          { name: "Tahoma", value:"gt-ff-Tahoma"}];
                         

    this.lineHeights = [ 'gt-lh-145','gt-lh-180', 'gt-lh-200'];

    this.margins =  [  {name: 'Newspaper', value:'gt-newspaper'},
                      {name: 'Paperback', value:'gt-paperback'},
                      {name: 'Wide', value:'gt-wide'},
                      {name: 'Page Fit', value:'gt-fit'} ];        
    }
}    
    
          
