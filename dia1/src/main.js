import "./style.css";

const app = document.querySelector("[data-js='app']");
const alter = document.querySelector("[data-js='toggle']");

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

alter.addEventListener("click", (event) => {
  event.preventDefault();
  app.style.display === "none"
    ? (app.style.display = "block")
    : (app.style.display = "none");
});
