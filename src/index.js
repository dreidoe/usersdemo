const root = document.querySelector("#root");
root.innerHTML = "<h2 class= ' text-violet-500'>Hello World</h2>";
console.log(root);

const resp = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await resp.json();

console.log(users);
