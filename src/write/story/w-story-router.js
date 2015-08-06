export class wStoryRouter{
    heading = 'Your Stories';

    configureRouter(config, router){
        config.map([
         ,{ route: 'create',       name: 'create',     moduleId: './create',     nav: true, title:'Cover' }
         ,{ route: ['','overview'],     name: 'overview',   moduleId: './overview',   nav: true, title:'Content' } 
         ,{ route: 'graph',        name: 'graph',      moduleId: './graph',      nav: true, title:'Visualize' } //node graph
         ,{ route: 'config',       name: 'config',     moduleId: './config',     nav: true, title:'Configure' } 
         ,{ route: 'stats',        name: 'stats',      moduleId: './stats',      nav: true, title:'Stats' }  
          //another route for favorites
        ]);

        this.router = router;
    }
}