import {computedFrom, inlineView} from 'aurelia-framework';  
import {bindable} from 'aurelia-framework';

/* template for user icons */
@inlineView(`<a class="user-icon" title.one-time="name" href.one-time="profileLink"><img src.one-time="iconSrc"/></a>`)
export class UserIcon {
    @bindable name = null;
	@bindable id = null;
	@bindable gravitar = null;
	 	
	@computedFrom('gravitar')
	get iconSrc(){
		return `http://www.gravatar.com/avatar/${this.gravitar}?s=30&d=mm`;
	}

	@computedFrom('id')
	get profileLink(){
		return `#/users/${this.id}`;
	}
}