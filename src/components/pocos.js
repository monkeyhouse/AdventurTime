export class StoryTile{		
	id = '';
	title = '';
	summary ='';
	picture = '';
	
	created=  '';
	published = '';
	
	likes = 0;
	views = 0;
	comments = 0;
	
	
	pages = 0;
	endings  = 0;
	
	tags = [];
	authors = [];
	authorCount = 0;
    constructor(data){
		  Object.assign(this, data);
	}	
}