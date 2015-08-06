import {bindable} from 'aurelia-framework';

export class Editor{

    @bindable expandIt = null;

    constructor(){
    } 

    collapse(){
        this.expandIt = false;
    }
    

}