for (let i = 0; i < 5; i++) {
  const node = document.getElementById("card");
  const clone = node.cloneNode(true);
  const container = document.getElementById("cards-container");
  container.appendChild(clone);
}
