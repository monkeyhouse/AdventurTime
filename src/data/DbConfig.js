export class DbConfig{
	
	constructor(){
		this.baseUrl = 'http://localhost:49120/breeze/'
	}
	
	GetServiceUrl( serviceName ){
		return this.baseUrl + serviceName;
	}
}