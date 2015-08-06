import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
//import {StoryData} from './../data/StoryData';
// import fs from 'fs';
// import cytoscape from 'cytoscape';
import lodash from 'lodash';
import $ from 'jquery';

@inject(HttpClient)//, StoryData)
export class Graph{
    
    constructor(http){//, storyData){
        this.http = http;
        //this.storyData = storyData;
        this.selected= {title : 'Click to select a page', text:'Text wil show here'};
    }
    
    activate(){
//         return this.http.get("/json/pages.json").then( response =>{       
//             this.pages = response.content;
// 
//         })
    }
    
    attached(){      
        this.http.get("/json/pages.json").then( response =>{       
            
            var pages = response.content;

this.pages = response.content
            var _ = lodash;
            

        var fpageId = id => `Page${id}`;
        var fpageName = id => `Page ${id}`;
        var nodes = _.map(pages, function(p) { return { data : { id:fpageId(p.id), name:fpageName(p.id) } }});
                   
        var edges = _.flatten(_.map(pages, function(p) { 
            return _.map(p.actions, function(a){
                if (a.pageId !=  0){
                  return { data : { source : fpageId(p.id), target : fpageId(a.pageId), text:a.body }}
                }
            }); 
        })).filter( function(e) { return e !== undefined });
       

               
            var cy = cytoscape({
               container: $('#cy')[0],
              
              style: cytoscape.stylesheet()
                .selector('node')
                  .css({
                    'content': 'data(name)',
                    'text-valign': 'center',
                    'color': 'white',
                    'text-outline-width': 2,
                    'text-outline-color': '#888'
                  })
                .selector(':selected')
                  .css({
                    'background-color': 'black',
                    'line-color': 'black',
                    'target-arrow-color': 'black',
                    'source-arrow-color': 'black',
                    'text-outline-color': 'black'
                  }),
              
              elements: {
                nodes: nodes,
                edges: edges 
              },
              
              layout: {
                name: 'grid',
                padding: 10
              }
            });
              
            var that = this;
            cy.on('tap', 'node', function(){
               var pageId =  this.data('id');
                var _ = lodash;
                var selectedPage = _.find(that.pages, p => fpageId(p.id) == pageId);
                that.selected.title = fpageName(selectedPage.id);
                that.selected.subtitle = '';
                that.selected.text = selectedPage.body;               
                    
            });
            
             cy.on('tap', 'edge', function(){
               var sourceId =  this.data('source');
               var targetId = this.data('target');
               var text = this.data('text');
                var _ = lodash;
                var sourcePage = _.find(that.pages, p => fpageId(p.id) == sourceId);
                var targetPage = _.find(that.pages, p => fpageId(p.id) == targetId); 
                var linkText =                
                that.selected.title = 'Action Link';
                that.selected.subtitle = fpageName(sourcePage.id) + ' to ' + fpageName(targetPage.id);
                that.selected.text = text;               
                    
            });
        }) ; 


    }
    
    
}