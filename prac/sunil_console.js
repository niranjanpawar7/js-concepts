function Niranjan (first, last) {
	this.firstName = first;
	this.lastName = last;
	return this;
}



function Salary(sal, firstName, lastName) {
	Niranjan.call(this, firstName, lastName);
 	this.sal = sal;
 	return this;
} 


Salary.prototype.getData = function() {
	 return this.firstName + ' ' + this.lastName + ' ' +   "salary => " + this.sal;
};


var test = new Niranjan('Niranjan', 'Pawar');
var check = new Salary(1000, test.firstName, test.lastName);

console.log(check.getData());

