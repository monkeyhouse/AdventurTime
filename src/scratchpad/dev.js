import _ from 'lodash';
//import 'inject' from 'aurelia-framework';

// import $ from 'jquery';
// import selectize from 'selectize';
// import 'selectize/css/selectize.css!'
// import 'selectize/css/selectize.bootstrap3.css!'

export class Dev{
  url = "www.cometstories.com";
  name = "Jimzs Stories";
  message = '';
  
  activate(){
    this.message =  `I enjoyed playing '${this.name}' on STACE. You can play too.`;
  }
    
}