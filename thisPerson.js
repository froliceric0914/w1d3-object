var person = {
  firstName: 'Bob',  // <= property containing data
  lastName:  'Smith', // <= ditto
  fullName: [this.firstName + ' ' + this.lastName]
}
console.log('Hello,' + person.fullName);

// var person = {
//   firstName: 'Bob',
//   lastName:  'Smith',
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// // Nice, now I can just say:
// console.log('Hello, ' + person.fullName());