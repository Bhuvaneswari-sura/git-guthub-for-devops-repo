function greet(name) {
  if (!name) {
    console.error("Error: name is required");
    return;
  }
  console.log("Hello, " + name);
}

greet("User");

const x = 10;
console.log(x);

if (x === 5) {
  console.log("x is 5");
}
