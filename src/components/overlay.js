import {inject, bindable} from 'aurelia-framework';  
import $ from 'jquery';

@inject(Element)
export class Overlay{	
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
		 this.toggleState();
	 }
	 
	 toggleState(){
	 	 $('.overlay, .overlay-cover').toggleClass('open closed');			
	 }
	 
}