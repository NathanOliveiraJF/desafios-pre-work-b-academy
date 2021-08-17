import "./style.css";

const app = document.querySelector("[data-js='app']");
const alter = document.querySelector("[data-js='alter']");

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

alter.addEventListener("click", (event) => {
  event.preventDefault();
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
});
