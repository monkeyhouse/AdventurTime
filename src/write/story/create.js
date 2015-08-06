import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Create{

    constructor(router){
        this.theRouter = router;
    }

    save() {
        alert('saved');
        this.theRouter.navigate("edit");
    }
    //create(){

    //}

    //save(){

    //}
}