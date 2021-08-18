const john = {
  name: "John",
  surname: "Doe",
  age: 30,
  hobbies: ["Surf", "Design"],
};

const jane = {
  ...john,
  hobbies: [...john.hobbies, "MuayThai", "Programming"],
  name: "jane",
};

console.log("John:", john);
console.log("Jane:", jane);
