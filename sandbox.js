// JavaScript object
const person = {
    name: "Mbali",
    age: 21,
    isStudent: true
  };
  
  // Convert JavaScript object to JSON string
  const jsonString = JSON.stringify(person);
  console.log(jsonString);  // {"name":"Mbali","age":22,"isStudent":true}
  
  // Convert JSON string back to JavaScript object
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);  // { name: 'Mbali', age: 22, isStudent: true }
  

// Creating a JSON object as a string
let jsonStrings = `{
    "name": "Mbali",
    "age": 21,
    "location": "Cape Town",
    "hobbies": ["Coding", "Reading", "Music"],
    "isStudent": true,
    "education": {
        "highSchool": "ABC High School",
        "university": "XYZ University",
        "degree": "Computer Science"
    }
}`;

// Parsing JSON string to JavaScript object
let parsedData = JSON.parse(jsonStrings);
console.log("Parsed Data:", parsedData);

// Accessing data from parsed JSON object
console.log("Name:", parsedData.name);
console.log("Age:", parsedData.age);
console.log("Location:", parsedData.location);
console.log("Hobbies:", parsedData.hobbies);
console.log("Is Student:", parsedData.isStudent);
console.log("University:", parsedData.education.university);

// Adding new property to the object
parsedData.favoriteColor = "Purple";
console.log("After Adding Favorite Color:", parsedData);

// Converting JavaScript object to JSON string
let newJsonString = JSON.stringify(parsedData);
console.log("New JSON String:", newJsonString);

// Creating another JavaScript object
let student = {
    name: "Mbuso",
    age: 30,
    location: "Cape Town",
    courses: ["Maths", "Java Script", "HTML"],
    isGraduated: true,
    details: {
        school: "VUT",
        grade: "A",
        activities: ["Developer", "Arts"]
    }
};

// Converting JavaScript object to JSON
let studentJson = JSON.stringify(student);
console.log("Student JSON:", studentJson);

// Parsing the JSON string back to JavaScript object
let studentData = JSON.parse(studentJson);
console.log("Student Data:", studentData);

// Accessing nested data
console.log("Student's School:", studentData.details.school);
console.log("Student's Activities:", studentData.details.activities);

// Changing value in the object
studentData.isGraduated = true;
console.log("After Graduation Update:", studentData);

// Converting updated object back to JSON
let updatedStudentJson = JSON.stringify(studentData);
console.log("Updated Student JSON:", updatedStudentJson);
