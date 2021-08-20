const inputNome = document.querySelector("[data-js='nome']");

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
