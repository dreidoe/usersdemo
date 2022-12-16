import { createBioCard, filterByName } from "./utils";

const root = document.querySelector("#root");

// This keeps track of what we type in the search bar
const letters = "";

// Function declarations/expressions

function renderCardsInMain(currentUsers) {
  main.innerHTML = currentUsers.map(createBioCard).join("");
}

const resp = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await resp.json();

// Take the array of users
// And 1-1: for each user, output the HTML string
// Join the array back into a STRING
const bioCardsHTML = users.map(createBioCard).join("");

root.classList.add("flex", "flex-col", "gap-y-8", "items-center");

root.innerHTML = `
<div>
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" placeholder="🔍" />
</div>
<main class="items-center grid grid-cols-3 gap-4">
  ${bioCardsHTML}
</main
`;

const main = document.querySelector("main");

// ⚠️ 'input' doesn't exist until we update the 'root' 'innerHTML'
const search = document.querySelector("input");

search.addEventListener(
  "input",

  // Browser API models the event as an Event object
  (event) => {
    const filteredUsers = filterByName(users, event.target.value);
    renderCardsInMain(filteredUsers);
  }
);
