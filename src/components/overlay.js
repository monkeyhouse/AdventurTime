import {inject} from 'aurelia-framework';  
import $ from 'jquery';

@inject(Element)
export class Overlay{	
	  constructor(element) {
	    this.element = element;
	  }
	 
	 attached(){
		 $(this.element).find('overlay-trigger').addClass('overlay-trigger');
		 
 		 $('.overlay-trigger, .overlay-close, .overlay-cover').click(
			 function(e){
			 $('.overlay, .overlay-cover').toggleClass('open closed');
			 e.preventDefault();
		 });

	 }
	
}