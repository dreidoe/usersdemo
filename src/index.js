import Card from “./components/Card”;
import Main from “./components/Main”;
import Search from “./components/Search”;
import apiService from “./services/api.service”;const users = await apiService.getUsers();const root = document.querySelector(“#root”);root.innerHTML = `
${Main()}
${Card(“John”)}
${Search()}
`;
