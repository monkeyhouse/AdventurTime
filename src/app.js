import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router){
        config.title = 'AdventureTime';
        config.map([
          { route: ['','welcome'], name: 'welcome',  moduleId: './welcome',      nav: true, title:'Welcome' }
          ,{ route: 'play',  name: 'play',   moduleId: './play/p-router',   nav: true, title:'Play' }
          ,{ route: 'write', name: 'write',  moduleId: './write/stories/w-stories-router', nav: true, title:'Write' }
          ,{ route: 'learn', name: 'learn',  moduleId: './learn/learn', nav: true, title:'Learn' }
          ,{ route: 'discuss', name: 'discuss',  moduleId: './discuss/discuss', nav: true, title:'Discuss' }
          ,{ route: 'scratchpad', name: 'scratchpad',  moduleId: './scratchpad/dev', nav: true, title:'Scratchpad' }
          // ,{ route: 'fontchooser', name: 'fontchooser',  moduleId: './font-chooser', nav: true, title:'Font Chooser' }
          
          // hidden top level routers
          ,{ route: 'story', name: 'write-story',  moduleId: './write/story/w-story-router', nav: false, title:'Write' }
          ,{ route: 'read', name: 'read',  moduleId: './play/game/router', nav: false, title:'Read' } // read / play game
        
        ]);

        this.router = router;
    }
}