import _ from 'lodash';

export class Tags{
	      
		      
    constructor(){        
      //all tags available for person, unrated have preference = 0
      this.tags =
         [{"id":7735,"text":"nostrud officia","preference":5},
          {"id":3335,"text":"in excepteur","preference":1},{"id":1712,"text":"incididunt aliqua","preference":5},{"id":9925,"text":"fugiat anim","preference":0},{"id":2742,"text":"deserunt in","preference":0},{"id":3313,"text":"aliquip qui","preference":1},{"id":8428,"text":"dolor ipsum","preference":5},{"id":1877,"text":"non nisi","preference":2},{"id":2046,"text":"aliquip exercitation","preference":2},{"id":2271,"text":"et deserunt","preference":3},{"id":7243,"text":"irure aliquip","preference":5},{"id":6443,"text":"mollit veniam","preference":1}];
    
      //preferred tags
      this.ratedTags = _.filter(this.tags, t => t.preference != 0);
      
      //tags with no preference
      this.remainingTags = _.filter(this.tags, t => t.preference == 0);
    } 
    // preference enum
    /*
     Strongly Like ="5"
     Like = "3"
     Neutral / No Judgement = 0
     Dislike = "2"
     Ban = 1 
     No Action = 0
     */
    remove(tag){        
        //remove from active tags, set to no preference
       _.remove( this.ratedTags, t => t === tag);              
       tag.preference = 0;
       this.remainingTags.push(tag);
    }
    
    prefer(tag_in, value){  
        var tag = _.find(this.remainingTags, t => t == tag_in);        
        tag.preference = value;
        _.remove(this.remainingTags, tag);
        this.ratedTags.push(tag);             
    }

}