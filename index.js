let person = {
    name: "Soumaya",
    age: 37,
    evaluations: [7, 10, 9]
  };
  console.log(person);
  console.log(person.evaluations);
  
  let emptyArray = ["green", "blue", "red"];
  console.log(emptyArray);

  console.log(emptyArray.length);
  console.log(emptyArray[emptyArray.length - 1]);

  emptyArray.push("Yellow");
  emptyArray.push(5);

  emptyArray.push({greeting: "hi, I am an object"});
  
  console.log(emptyArray[emptyArray.length - 1].greeting);




  /*bracket notation:

  let person = {
    name: "Soumaya",
    age: 37
  };
  console.log(person["age"]);

console.log(person["evaluations"]); // Output: [7, 10, 9]

*/

