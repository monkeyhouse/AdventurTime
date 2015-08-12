import {bindable} from 'aurelia-framework';
import bootstrap from 'bootstrap';

export class SocialIconBar{	
	@bindable message;
	@bindable url;
	@bindable contentType;
	
	//links	
	twitter = '';
	facebook = '';
	email = '';
	link = '';
	//
	
	attached(){
		this.makeLinks();
	}
	
	makeLinks(){
		var url= this.url;	
		var message = this.message;
		var body = this.message;		
		var subject = 'Hot link from Story Time Adventures Ce';

		this.twitter = `https://twitter.com/home?status=${message}`; //accepts text
		this.facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`; //accepts url
		this.email = `mailto:?&subject=${subject}&body=${body}`;
		this.link = `${url}`;	
		
		$(this.pop).popover('destroy');
		$(this.pop).popover({
	     html: true,
		 content: `<div ref="popoverContent"><input type="text" readonly value="${url}" autofocus ></div>`,
		 trigger:  'click'	
		});
			
	}
}