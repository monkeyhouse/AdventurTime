
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .feature('components')
    .feature('formatters');
  //  .plugin('aurelia-breeze') ;
    
  aurelia.start().then(a => a.setRoot());
}
