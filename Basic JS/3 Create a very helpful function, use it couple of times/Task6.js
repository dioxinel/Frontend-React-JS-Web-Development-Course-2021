const Person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
  }
 };
  
 const testArgs = ['sushi', 'hiking']
  
 let logPersonNameAndInterests = function(...testArgs) {
   console.log(...testArgs)
   console.log(`Task6: ${this.getFullName()} loves: ${testArgs}`)
 }; // your code here

 logPersonNameAndInterests.apply(Person, testArgs)