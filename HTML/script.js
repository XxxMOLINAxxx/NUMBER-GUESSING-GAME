let name = prompt("What's your name?");
console.log(`Hello, ${name}!`);
let helloNameElement = document.querySelector("#hello-name");
helloNameElement.innerHTML = `Hello, ${name}!`;
