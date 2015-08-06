import {customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import selectize from 'selectize';
import 'selectize/css/selectize.css!'
import 'selectize/css/selectize.bootstrap3.css!'

@customElement('my-select')
export class MySelect{
    @bindable config; 
    @bindable value;    
    @bindable({name:'start', attribute:'start', changeHandler:'restart',defaultValue:false})
     
    attached(){   
       if (this.start){  
          this.init(); 
       }   
     }
     
     detached(){
        this.destroySelect();
     }
    
    destroySelect(){
      if (this.select != null){
            this.select.destroy();
        }
    
    }
    
    restart(val){
       if (val)
        this.init();
    }
    
    
    init(){        
        this.destroySelect();
                
        var config = this.config || {};  
        
        var value = this.value || "";
    
        console.log(config);
          
        // if items is null, set items to value       
        if (config.items == null ){
            if ( Array.isArray( value ) ){
                console.log('is array');
                config.items = value;
            }else if (( value ) != null ){
                config.items = [ value ];
            }         
        }
                    
        console.log(config);
         
        // add on change event as a poor mans observer
        if (config.onChange == null ){ // or undefined 
           config.onChange = val => { this.value = val };
        } 
        else{
           var f = config.onChange;
           config.onChange = val => {  this.value = val; f(val) };   
        }
       
        this.select =  $(this.mySelect).selectize( config )[0];
        
        
    }

}