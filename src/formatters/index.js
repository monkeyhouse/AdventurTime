/*
converters picked from
 https://github.com/jdanyow/aurelia-converters/blob/master/src/index.js *

*/
import moment from 'moment';
import numeral from 'numeral';


export class RelativeValueConverter {
  toView(value){
    if (!value)
      return null;
    return moment(value).fromNow();
  }
}

export class DateValueConverter {
  toView(value, format) {
    if (!value)
      return null;
    return moment(value).format(format);
  }
}

export class NumberValueConverter {
  toView(value, format) {
    if (!value)
      return null;
    return numeral(value).format(format);
  }
}

export class AgeValueConverter {
  toView(dob) {
    if (!dob)
      return null;
    return Math.floor(moment().diff(moment(dob), 'year', false));
  }
}



export class SortValueConverter {
  toView(array, propertyName, comparison = 'ordinalIgnoreCase', direction = 'ascending') {
    var directionFactor = direction === 'ascending' ? 1 : -1,
        comparer = this[comparison + 'Comparison'];
     
    if (propertyName === undefined)
      return array.sort((a, b) => comparer(a, b) * directionFactor);
    return array.sort((a, b) => comparer(a[propertyName], b[propertyName]) * directionFactor);
  }

  ordinalIgnoreCaseComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
  }

  ordinalComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    a = a.toString();
    b = b.toString();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
  }

  dateComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    return moment(b).diff(moment(a));
  }

  numberComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    return a - b;
  }
}

/* custom conveters here */
export class SortConfig{
  
  comparer = "ordinalIgnoreCaseComparison";
  direction = "ascending";
  directonFactor = 1;
  propertyName = null;
  
  constructor( config ){
    Object.assign(this, config);
    
    if (config.comparison != null){
        this.comparer = this[config.comparison + 'Comparison'];
    }
    if (config.direction != null){
        this.directionFactor = config.direction === 'ascending' ? 1 : -1;
    }
  }
}

export class MultiSortValueConverter{ //} extends SortValueConverter{
  toView(array, config){  // config is [ { propertyName, comparison, direction}]

   if (config === undefined)
     return array;
  
   if (!Array.isArray(config))
     throw 'config must be an array';
      
   if (config.length == 0)
     return array;
      
    var len = config.length;
      
    var fxnText = ' var r = 0; ';
    var comparer = [], prop = [], dirFactor = [];

    for (var i  = 0; i < len;  i++){
          fxnText = fxnText + `
       
          r = that[comparer[${i}]] ( a[that.prop[${i}]] , b[that.prop[${i}]] ) * that.dirFactor[${i}];
          if ( r != 0 ) return r; `;
      
       var cfg = new SortConfig(config[i]);
       comparer.push(cfg["comparer"]);
       prop.push(cfg["propertyName"]);
       dirFactor.push(cfg["directionFactor"]);
    }
    
    var that = this;
    that.comparer = comparer;
    that.prop = prop;
    that.dirFactor = dirFactor;
    eval( ' this.fxn = function( a , b ){ ' + fxnText + ' }'); //new Function('a','b', fxnText);    
    return array.sort( this.fxn ); 
    
  }; 
  
  
  /* from sort value conveter */
  ordinalIgnoreCaseComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
  }

  ordinalComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    a = a.toString();
    b = b.toString();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
  }

  dateComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    return moment(b).diff(moment(a));
  }

  numberComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    return a - b;
  }
    
}

export class JsonValueConverter {
   toView(value) {
    if (value === null)
      return 'null';
    if (value === undefined)
      return 'undefined';
    return JSON.stringify(value, null, 2);
  }
}


export class DateFromTodayValueConverter {
  toView(obj) {
	  return moment(obj).fromNow(); 
	}
}

export class TakeValueConverter {
  toView(array, count) {
    return array.slice(0, count);
  }
}

export function configure(aurelia) {
 // aurelia.resources.registerValueConverter( 'sort', SortValueConverter);
  
  aurelia.globalizeResources('./index');
   //aurelia.globalizeResources(RelativeValueConverter, DateValueConverter, NumberValueConverter, AgeValueConverter, SortValueConverter);
}