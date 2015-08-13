import {inject, bindable} from 'aurelia-framework';  
import $ from 'jquery';

@inject(Element)
export class Overlay{	
 	  @bindable close = x => { console.log("closed, log from overlay")};
 	  @bindable isOpen = false;
	   
	  constructor(element) {
	    this.element = element;
		
	  }	  
  	 
	 attached(){
		 var that = this;
		 
		 $(this.element).find('overlay-trigger').addClass('overlay-trigger');
		 
 		 $('.overlay-trigger, .overlay-close, .overlay-cover').click(
			 function(e){			 
			 e.preventDefault();	
			 that.isOpen = !that.isOpen;		
		 });	
	 }

	 isOpenChanged(propertyName, newValue, oldValue){
		 if (newValue){
			 var z = close;
			 this.close();
		 }
		 this.toggleState();
	 }
	 
	 toggleState(){
	 	 $('.overlay, .overlay-cover').toggleClass('open closed');			
	 }
	 
}