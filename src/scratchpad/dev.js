
//import 'inject' from 'aurelia-framework';

// import $ from 'jquery';
// import selectize from 'selectize';
// import 'selectize/css/selectize.css!'
// import 'selectize/css/selectize.bootstrap3.css!'

export class Dev{

    constructor(){
        
      this.myOptions = [
            {id: 1, title: 'Spectrometer', url: 'http://en.wikipedia.org/wiki/Spectrometers'},
			{id: 2, title: 'Star Chart', url: 'http://en.wikipedia.org/wiki/Star_chart'},
			{id: 3, title: 'Electrical Tape', url: 'http://en.wikipedia.org/wiki/Electrical_tape'}
         ];
       
      this.theValue = [1,2];
      this.config = {
            allowEmptyOption : true,
            valueField :'id',
            sortField: 'title',
            labelField:'title',
            options : this.myOptions,        
            maxItems : 3
      };
    } 
    
  

    
    showPageEditor(){
        this.showEditor = true;
    }

    canDeactivate(){
    }
}