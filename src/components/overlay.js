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
			 $('.overlay, .overlay-cover').toggleClass('open closed');
			 e.preventDefault();
			 
			 if ($('.overlay').hasClass('closed')){
				that.isOpen = false;
				
			 }else{
				that.isOpen = true;
			
			 }
		 });

	 }
	 
	 isOpenChanged(propertyName, newValue, oldValue){
		 console.log('overlay is open was changed');
	 }
	
}