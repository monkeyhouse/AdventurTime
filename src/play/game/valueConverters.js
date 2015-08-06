
export class jsonValueConverter {
  toView(obj) {
	 return JSON.stringify(obj, null, 4); 
  }
}