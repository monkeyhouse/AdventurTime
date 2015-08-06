
export class StoryTile{	
	  constructor() {
		  	/*
			user questions:
			how long is going to take?
			am I going to enjoy it?
		 */
		  
	    this.s = {
			id : '',
   			title:"Take the money and run: A story about two lovers."
			,summary:"This is a story about jimmy bob and boby sue. They were two young lovers with nothing better to do, than sit around the house and get high and watch tube. This is what happened when they decided to cut loose."
			,likes:13
			,comments:23	
			,views:80		
			
			//quick read
			//average read
			//long read
			//marathon
			//average time per user completion (median)
			//average user took x to complete
			
			,pages : 100			
			,endings: 5
			
    		//many plays
			,plays:12 //only display if over 10, othewise: baby icon? (green thumb?)
			
			//great!
			,playsPerUser:3 //repeats
			,completionsPerUser:.9
			// if very good, give it a guy in robe 
			// badge : devoted followers - mamy repeat playthroughs
			
			// if completion rate is low enough, flag as confusing
			// mods can flag for contribtuons and editing to make it a good story
			
			// site: story time
			// story time adventures community edition
			// (STaCE) should be site name
			
			,tags:[	
					{id:1, text:'Robbery'},
				  	{id:2, text:'Romance'},
				 	{id:3, text:'Outlaws'},
				  	{id:4, text:'Tall Tales'}			     
				  ]
		    ,author:{id:1000, icon:'asdfasdfsa.jpg', name:'John Stewart'}   
			,contributors:[
  			  {id:1001, icon:'asdfasdfsa.jpg', name:'Jim Perry'},   
			  {id:1002, icon:'asdfasdfsa.jpg', name:'Bulwinkle' }, 
			  {id:1003, icon:'asdfasdfsa.jpg', name:'George Sally'},
  			  {id:1004, icon:'asdfasdfsa.jpg', name:'Cricket Jones'}			   							   				
			]
			,numContributors:11
			,created: new Date()
			
			,published:new Date()
			,completions: 10
			//http://www.gravatar.com/avatar/ + slug + ?d=mm
			// last modified : ?
			//,state 'alpha', 'beta', 'published'
			//created : 
			
		}
	
  }
 

	
}