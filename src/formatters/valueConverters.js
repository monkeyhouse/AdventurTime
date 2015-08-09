import moment from 'moment';

export class jsonValueConverter {
  toView(obj) {
	 return JSON.stringify(obj, null, 4); 
  }
}


export class dateFromTodayValueConverter {
  toView(obj) {
	  return moment(obj).fromNow(); 
	}
}