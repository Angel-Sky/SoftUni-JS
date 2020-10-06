function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  let [input, output] = Array.from(document.querySelectorAll("textarea"));
  let table = document.querySelector("tbody");
  
  generateBtn.addEventListener("click", generateData);
  buyBtn.addEventListener("click", buyProduct)

  function generateData(e) {
    let data = JSON.parse(input.value);
    for (let line of data) {
      let tableRow = document.createElement("tr");
      let html = `
      <td><img src="${line.img}"></td>
      <td><p>${line.name}</p></td>
      <td><p>${line.price}</p></td>
      <td><p>${line.decFactor}</p></td>
      <td><input type="checkbox" /></td>`;
      tableRow.innerHTML = html;
      table.appendChild(tableRow);
    }
    input.value = "";
  }

  function buyProduct(e) {
    let boughtItems = Array.from(document.querySelectorAll("input"))
      .filter(i => i.checked)
      .map(i => i.parentNode.parentNode)
      .map(row => ({
        name: row.children[1].textContent.trim(),
        price: Number(row.children[2].textContent),
        decFactor: Number(row.children[3].textContent)
      }))

    let result = [
      `Bought furniture: ${boughtItems.map(i => i.name).join(", ")}`,
      `Total price: ${(boughtItems.reduce((a, b) => a + b.price, 0)).toFixed(2)}`,
      `Average decoration factor: ${boughtItems.reduce((a, b) => a + b.decFactor, 0) / boughtItems.length}`
    ]

    output.value = result.join('\n')
  }

}