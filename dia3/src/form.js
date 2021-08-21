const inputNome = document.querySelector("[data-js='nome']");
const form = document.querySelector("[data-js='form']");

inputNome.addEventListener("input", (event) => {
  if (event.target.value === "") {
    return;
  }
  const str = event.target.value.toLowerCase().split(" ");
  if (str.length > 0) {
    const ar = str.map((i) => {
      if (["de", "da", "do", "dos"].includes(i)) {
        return i;
      }
      return i.charAt(0).toUpperCase() + i.substr(1);
    });
    console.log(ar.join(" "));
  }
});

const select = document.createElement("select");
select.setAttribute("multiple", true);

["#4169E1", "#DC143C", "#006400", "#A0522D"].forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  select.appendChild(option);
});

form.appendChild(select);
const containerDiv = document.createElement("div");

select.addEventListener("change", (e) => {
  containerDiv.innerHTML = "";
  Array.from(e.target.selectedOptions).forEach((option) => {
    const div = createElementDiv(option.value);
    containerDiv.appendChild(div);
  });
});

function createElementDiv(color) {
  const div = document.createElement("div");
  div.style.display = "block";
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = color;
  return div;
}
document.body.appendChild(containerDiv);
