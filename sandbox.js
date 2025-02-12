// JavaScript object
const person = {
    name: "Mbali",
    age: 22,
    isStudent: true
  };
  
  // Convert JavaScript object to JSON string
  const jsonString = JSON.stringify(person);
  console.log(jsonString);  // {"name":"Mbali","age":22,"isStudent":true}
  
  // Convert JSON string back to JavaScript object
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);  // { name: 'Mbali', age: 22, isStudent: true }
  