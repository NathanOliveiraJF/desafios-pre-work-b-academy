const url = "http://localhost:3333/cars";

export async function getAll() {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => ({ err: true, message: err.message }));
}

export async function remove(plate) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(plate),
  });
}

export async function create(data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => ({ err: true, message: err.message }));
}
