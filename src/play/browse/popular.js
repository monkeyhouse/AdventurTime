export class Popular{
    heading = 'Welcome to the Aurelia Navigation App!';
    
    features = ['list of stories', 'options last 1 month, 3 months, 1 year'];

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    welcome(){
        alert(`Welcome, ${this.fullName}!`);
    }
}