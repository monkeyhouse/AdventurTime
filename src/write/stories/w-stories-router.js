export class wStoriesRouter{
   

    configureRouter(config, router){
        config.map([
          { route: ['','stories'],   name: 'mystories',       moduleId: './mystories',   nav: true, title:'My Stories' }
         ,{ route: 'collabs', name: 'collabs',      moduleId: './collabs',   nav: true, title:'Collaborations' } 
         ,{ route: 'story', name: 'story',      moduleId: './../story/w-story-router',   nav: true, title:'Story' } //node graph
        ]);

     
        this.router = router;
    }
}