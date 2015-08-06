import {useView} from 'aurelia-framework';

@useView('../todo.html')
export class Learn{
    heading = 'FAQ, tutorials, docs, learning resources';

    features = [
        'FAQ'
        ,'Getting Started - how to use the site'
        ,'Getting Started Sections for each unusual feature, rep, groups, login or other'
        ,'Getting Started - how to write a create your own adventure'
        ,'Getting Started - how to collaborate'
        ,'Getting Started - how to discuss collaborations'
        ,'What makes a good story?'
        ,'Write your own adventure - story architrecure patterns with images (trees)'
         ];

}