import {inject, bindable} from 'aurelia-framework';
//@inject(TimeSpanOptions)
export class Filter{	
	@bindable filterChanged = x => { console.log("filter updates ,log from filter")};
	@bindable showTimeFrame = false;
	@bindable showCategories = false;
	
	selectedTimeFrame = 0;
	selectedCategory = 0;
		
	constructor(){

		var timeframe = new TimeFrameMode();
		this.timeFrames = timeframe.getOptions();	  
		
		//preferred tags where preference is  love or like
		this.tags = [{"id":7735,"text":"nostrud officia","preference":5}, {"id":3335,"text":"in excepteur","preference":1}];
	}
	
	optionsUpdated(){
		console.log("options were updated")
	}
	
	overlayClosed(){
		console.log("overlay closed was called from filter");
		//this.OptionsUpdated()?
	}
	
	timeSelected(){
		this.optionsUpdated();
		// pass in filter params?
		this.filterChanged();
		
		// or put params into url?
		
		
	}
	
	categorySelected(){
		this.optionsUpdated();
		this.filterChanged();
	}

}

export class TimeFrameMode{
	undefined = 0;
	oneWeek = 1;
	oneMonth = 2;
	threeMonths = 3;
	oneYear = 4;
	allTime = 5;
	
	getOptions(){
		return [
			{ text: "past 1 week", value : 1},
			{ text: "past 1 month", value : 2},
			{ text: "past 3 months", value : 3},
			{ text: "past 1 year", value : 4},
			{ text: "all time", value : 5}
		];
	}
}