const form = document.querySelector("[data-js='form-car']");
const table = document.querySelector("[data-js='table']");

const getElement = (event) => (element) => {
  return event.target.elements[element];
};

import { getAll, remove, create } from "./dao.js";

loadingData();
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const getValue = getElement(e);
  const data = createCar(getValue);
  const post = await create(data);
  console.log(post);
  if (post.error) {
    const h2 = document.createElement("h2");
    h2.textContent = post.message;
    document.body.prepend(h2);
    console.log(post.message);
  } else {
    const h2 = document.querySelector("h2");
    if (h2) {
      document.body.removeChild(h2);
    }
  }
  loadingData();
  e.target.reset();
  getValue("image").focus();
});

async function loadingData() {
  const result = await getAll();
  if (result.error) {
    console.log("error", result.error);
    return;
  }
  const tr = document.querySelector("[data-js='empty']");
  if (tr) {
    table.removeChild(tr);
  }

  if (result.length === 0) {
    const tr = document.createElement("tr");
    const td = createTag["text"]("Não há carros cadastrados");
    td.colSpan = 6;
    tr.dataset.js = "empty";
    tr.appendChild(td);
    table.appendChild(tr);
    return;
  }
  table.innerHTML = "";
  result.forEach(createRow);
}

function createCar(element) {
  return {
    image: element("image").value,
    brandModel: element("brandModel").value,
    year: element("year").value,
    plate: element("plate").value,
    color: element("color").value,
  };
}

function createRow(data) {
  const tr = document.createElement("tr");
  tr.dataset.plate = data.plate;

  const elements = createElement(data);

  elements.forEach((x) => {
    const td = createTag[x.type](x.value);
    tr.appendChild(td);
  });
  const button = document.createElement("button");
  button.dataset.plate = data.plate;
  button.textContent = "del";
  button.addEventListener("click", removeCar);
  const td = document.createElement("td");
  td.appendChild(button);
  tr.appendChild(td);
  table.appendChild(tr);
}

async function removeCar(event) {
  const plate = event.target.dataset.plate;
  console.log(plate);
  const result = await remove({ plate });

  if (result.error) {
    console.log("erro delete:: ", error.message);
    return;
  }
  const tr = document.querySelector(`tr[data-plate="${plate}"]`);
  table.removeChild(tr);

  loadingData();
}

function createElement(obj) {
  const ar = [
    { type: "img", value: obj.image },
    { type: "text", value: obj.brandModel },
    { type: "text", value: obj.year },
    { type: "text", value: obj.plate },
    { type: "color", value: obj.color },
  ];
  return ar;
}

const createTag = {
  img(value) {
    const td = document.createElement("td");
    const img = document.createElement("img");
    img.src = value;
    img.width = 100;
    td.appendChild(img);
    return td;
  },
  text(value) {
    const td = document.createElement("td");
    td.textContent = value;
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
};
