import _ from 'lodash';
//import 'inject' from 'aurelia-framework';
// import $ from 'jquery';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import q from 'q';
import breeze from 'breeze';

//dataservice
@inject(breeze, HttpClient)
export class Dev{
	
	tags = [];
	
	constructor(breeze, http){
		
		
		this.stories = [{title:'default title'}];
		
		
		this.breeze = breeze;
		this.http = http;
		
		this.EntityQuery = breeze.EntityQuery;
		this.FilterQueryOp = breeze.FilterQueryOp;
		this.Predicate = breeze.Predicate;

	
   		var serviceUrl = 'http://localhost:54418/breeze/Tags/';
	

			// create a manager to execute queries
		this.manager = new breeze.EntityManager(serviceUrl);
		
		
		//success function
		this.querySucceeded = (data) => {
			data.results.forEach( (item) => {
						
		        var t = new Tag();
				t.id = item.Id;
				t.text = item.Text;
				this.tags.push(t);
				
			});
			
			console.log(this.tags);
		}

		//Stories
		var query = this.EntityQuery.from('/Tags');   		
	
		this.manager.executeQuery(query) // returns a promise
			.then( this.querySucceeded )  // process results
			.fail( t => console.log(t));    // handle error

	}	
	
	//do query
	set filter(value){
		
	  var query1 = this.EntityQuery.from('/Tags')

	  if (value == ''){
	  }else{
		  query1 = query1.where('Text', 'startsWith', value);
	  }
	  
		  
	  this.manager.executeQuery( query1 )
  	    .then(  (data) => {
			  
	  	    this.tags = [];
			data.results.forEach( (item) => {
						
		        var t = new Tag();
				t.id = item.Id;
				t.text = item.Text;
				this.tags.push(t);
				
			});
			
			console.log(this.tags);
		})
		.fail( t => {  console.log('fail');  console.log(t); }  );
		
	  //var result = 
 	  // this.stories	
	}
	
		
}

export class Tag{
	id = 0;
	text = 0;
	constructor(data){
		Object.assign(this, data);	
	}
}