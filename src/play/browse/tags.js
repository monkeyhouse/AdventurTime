import _ from 'lodash';
import {inject} from 'aurelia-framework';

export class Tags{	  
  
    _tagFilter = '';

    tags = []; 
    availableTags = [];
    
    constructor(){        
      //all tags available for person, unrated have preference = 0
      this.allTags =
         [{"id":7735,"text":"nostrud officia","preference":5},
          {"id":3335,"text":"in excepteur","preference":1},{"id":1712,"text":"incididunt aliqua","preference":5},{"id":9925,"text":"fugiat anim","preference":0},{"id":2742,"text":"deserunt in","preference":0},{"id":3313,"text":"aliquip qui","preference":1},{"id":8428,"text":"dolor ipsum","preference":5},{"id":1877,"text":"non nisi","preference":2},{"id":2046,"text":"aliquip exercitation","preference":2},{"id":2271,"text":"et deserunt","preference":3},{"id":7243,"text":"irure aliquip","preference":5},{"id":6443,"text":"mollit veniam","preference":1}];
    
      //all tags
      this.tags = _.filter(this.allTags, t => t.preference != 0 );
      
      //tags with no preference
      this.availableTags = _.filter(this.allTags, t => t.preference == 0);
      
      this.tpType = new TagPreference();    
      
       this.updateSortConfig();
       this.refreshArrays();                      
     } 

    remove(tag){        
        //remove from active tags, set to no preference
        //      _.remove( this.tags, t=> t === tag);       
       tag.preference = 0;
       this.tags.splice(this.tags.indexOf(tag),1); 

       this.availableTags.push(tag);
       
       
       this.availableTags = this.availableTags.slice(0);
       this.tags = this.tags.slice(0);
       
       this.refreshArrays();
    }
    
    prefer(tag, value){  
        if (tag !== Object(tag))
             return;
        
        var t2 = _.find(this.availableTags, t => t == tag);             
        t2.preference = value;
        
        this.availableTags.splice(this.availableTags.indexOf(tag),1); 

        this.tags.unshift(tag);             

       this.refreshArrays();
    }
    
    get tagFilter(){
        return this._tagfilter;
    }
    
    set tagFilter( value ){
        //debugger;
        this._tagFilter = value;
        
        if ( value == ''){
            this.tags = _.filter(this.allTags, t => t.preference != 0 );
            this.refreshArrays();
            return;
        }
        
        this.tags = _.filter(this.allTags, t => t.preference != 0 
                        && t.text.toUpperCase().indexOf(value.toUpperCase()) == 0); 
    }
    
    _sortBy = "text";
    _sortByOrder = "ascending";
    _secondSortProp = "preference";
    
    _sortConfig = [];    
    get sortConfig(){
        return this._sortConfig;      
    }
    
    updateSortConfig(){
       this._sortConfig =
          [ { propertyName:this._sortBy , direction: this._sortByOrder },
            { propertyName:this._secondSortProp , direction: 'ascending' } ];

        console.log(this._sortConfig);       
    }
    
    get sortBy(){
        return this._sortBy;
    }
    
    set sortBy( value ){
        this._secondSortProp = this._sortBy;
        this._sortBy = value;
        this.updateSortConfig();
        this.refreshArrays();        
    }
    
    get sortByOrder(){
        return this._sortByOrder;
    }
    
    set sortByOrder(value){
        this._sortByOrder = value;
        this.updateSortConfig();
        this.refreshArrays();
    }
    
    refreshArrays(){
        this.availableTags = this.availableTags.slice(0);    
        this.tags = this.tags.slice(0);
    }
}


export class Tag {
    id = 0; 
    text = '';
    preference = 0;
};

export class TagPreference{
    // tag preference type enum
    none = 0;
    love = 1;
    like = 2;
    dislike = 3;
    ban  =  5;
    
}
