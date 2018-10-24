var mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;
mary // shows the resulting object

var person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};

person["phoneNumbers"] =12345678;

console.log(typeof person["phoneNumbers"]);

console.log(person["phoneNumbers"] instanceof Object)
// console.log(person["phoneNumbers"] instanceof Array)
// console.log(person["phoneNumbers"] instanceof String)

// console.log("person: ", person)
// console.log("address: ", person["address"]["city"])