import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Config{

    constructor(router){
        this.theRouter = router;
    }

  
}