const form = document.querySelector("[data-js='form-car']");
const table = document.querySelector("[data-js='table']");

const tbody = document.createElement("tbody");
const formField = (event) => (name) => {
  return event.target.elements[name].value;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getValues = formField(e);
  const car = createCar(getValues);

  const tr = document.createElement("tr");
  car.forEach((x) => {
    const td = createTag[x.type](x.value);
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
  table.appendChild(tbody);
  e.target.reset();
});

function createCar(element) {
  const model = { type: "text", value: element("model") };
  const img = { type: "img", value: element("img") };
  const year = { type: "text", value: element("year") };
  const plate = { type: "text", value: element("plate") };
  const color = { type: "color", value: element("color") };
  return [img, model, year, plate, color];
}

//felipe deschamps salvando vidas
//https://youtu.be/Lf3ZV0UsnEo?t=438
const createTag = {
  img(value) {
    const td = document.createElement("td");
    const img = document.createElement("img");
    img.src = value;
    img.width = 100;
    td.appendChild(img);
    console.log(value);
    return td;
  },
  color(value) {
    const td = document.createElement("td");
    const div = document.createElement("div");
    div.style.backgroundColor = value;
    div.style.width = "100px";
    div.style.height = "100px";
    td.appendChild(div);
    return td;
  },
  text(value) {
    const td = document.createElement("td");
    td.textContent = value;
    return td;
  },
};
