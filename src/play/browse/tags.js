import _ from 'lodash';
import {inject} from 'aurelia-framework';

export class Tags{	  
  
    _tagFilter = '';

    tags = []; 
    availableTags = [];
    
    constructor(){        
      //all tags available for person, unrated have preference = 0
      
      this.maxPreferences = 15; 
      this.allTags =
         [{"id":7735,"text":"nostrud officia","preference":5},
          {"id":3335,"text":"in excepteur","preference":1},{"id":1712,"text":"incididunt aliqua","preference":5},{"id":9925,"text":"fugiat anim","preference":2},{"id":2742,"text":"deserunt in","preference":1},{"id":3313,"text":"aliquip qui","preference":1},{"id":8428,"text":"dolor ipsum","preference":5},{"id":1877,"text":"non nisi","preference":2},{"id":2046,"text":"aliquip exercitation","preference":2},{"id":2271,"text":"et deserunt","preference":3},{"id":7243,"text":"irure aliquip","preference":5},{"id":6443,"text":"mollit veniam","preference":1}];
    
      this.totalPreferences = this.allTags.length;

       this.allTags = this.allTags.concat(
       [{"id":1447,"text":"commodo proident","preference":0},{"id":1917,"text":"qui commodo","preference":0},{"id":9293,"text":"esse in","preference":0},{"id":2081,"text":"commodo esse","preference":0},{"id":2806,"text":"veniam do","preference":0},{"id":1799,"text":"eu commodo","preference":0},{"id":3266,"text":"ad esse","preference":0},{"id":5900,"text":"aliquip ad","preference":0},{"id":3134,"text":"commodo ad","preference":0},{"id":5609,"text":"sunt magna","preference":0},{"id":3775,"text":"voluptate eu","preference":0},{"id":6674,"text":"dolor ullamco","preference":0},{"id":2063,"text":"fugiat mollit","preference":0},{"id":4382,"text":"culpa excepteur","preference":0},{"id":9598,"text":"fugiat duis","preference":0},{"id":1933,"text":"officia duis","preference":0}]
       );
       
      //all tags
      this.tags = this.allTags; //_.filter(this.allTags, t => t.preference != 0 );
      
      //seleted tags
      this.selectedTags = _.filter(this.allTags, t => t.preference != 0 );
                
       this.tpType = new TagPreference();    
      
       this.updateSortConfig();
       this.refreshArrays();                      
     } 

    remove(tag){        
      //set to no preference       
      this.prefer(tag, this.tpType.none);
    }
    
    prefer(tag, value){  
        if (tag !== Object(tag))
             return;
        
        //find tag in main array
        var initPreference = tag.preference;
        var t2 = _.find(this.allTags, t => t == tag);             
        t2.preference = value;
        

        //add tag
        if ( initPreference == this.tpType.none && value != this.tpType.none ){
            this.selectedTags.unshift(tag);
            this.refreshSelectedArray();
        }

       //remove tag        
        if ( value == this.tpType.none && initPreference !=  this.tpType.none){
           this.selectedTags.splice(this.selectedTags.indexOf(tag),1);       
           this.refreshSelectedArray();
         
        }
    }
    
    get tagFilter(){
        return this._tagfilter;
    }
    
    set tagFilter( value ){
        //debugger;
        this._tagFilter = value;
        
        if ( value == ''){
            this.tags = this.allTags; //_.filter(this.allTags, t => t.preference != 0 );
            this.refreshTagsArray();
            return;
        }
        
        this.tags = _.filter(this.allTags, t => t.text.toUpperCase().indexOf(value.toUpperCase()) == 0); 
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
        this.refreshTagsArray();        
    }
    
    get sortByOrder(){
        return this._sortByOrder;
    }
    
    set sortByOrder(value){
        this._sortByOrder = value;
        this.updateSortConfig();
        this.refreshTagsArray();
    }
    
    refreshTagsArray(){
        this.tags = this.tags.slice(0);
    }
    refreshSelectedArray(){
        this.selectedTags = this.selectedTags.slice(0); 
    }
    refreshArrays(){
        this.selectedTags = this.selectedTags.slice(0);
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
