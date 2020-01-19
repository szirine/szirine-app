export class CustomDate {

monthName: string;
month: number;
day: number;
year: number;

constructor() {
	const d = new Date();
	this.month = d.getMonth() + 1;
	this.day = d.getDay();
	this.year = d.getFullYear();
	this.monthName = d.toLocaleString('default', { month: 'long' });
	console.log(`monthName: ${this.monthName}`);
}
}
