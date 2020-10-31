function solve() {
   const filterInput = document.querySelector("#filter");
   const inputs = Array.from(document.querySelectorAll("#add-new > input"));
   const [nameInput, quantityInput, priceInput] = inputs;

   const productsSection = document.querySelector("#products > ul");
   const buyerSection = document.querySelector("#myProducts > ul");
   const totalPriceEl = document.querySelectorAll("body > h1").item(1);
   
   let totalPrice = 0;

   document.querySelector("#add-new > button").addEventListener("click", addProduct);
   document.querySelector(".filter > button").addEventListener("click", filter);
   document.querySelector("#myProducts > button").addEventListener("click", buyProducts);

   function addProduct(e) {
      e.preventDefault();
      const name = nameInput.value.trim();
      let quantity = Number(quantityInput.value.trim());
      const price = Number(priceInput.value.trim());

      if (name !== "" && quantity !== "" && price !== "" && !isNaN(quantity) && !isNaN(price)) {
         const wishlistBtn = genEl("button", "Add to Client's List");
         const availability = genEl("strong", `Available: ${quantity}`);

         const newItem = genEl("li", [
            genEl("span", name),
            availability,
            genEl("div", [
               genEl("strong", price.toFixed(2)),
               wishlistBtn
            ])
         ]);

         productsSection.appendChild(newItem);

         wishlistBtn.addEventListener("click", (e) => {
            buyerSection.appendChild(genEl("li", [name, genEl("strong", price.toFixed(2))]));
            totalPrice += price;
            totalPriceEl.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
            quantity--;
            if (quantity == 0) {
               newItem.remove();
            } else {
               availability.textContent = `Available: ${quantity}`;
            } 
         });

         nameInput.value = "", quantityInput.value = "", priceInput.value = "";
      }
   }

   function filter() {
      const criteria = filterInput.toLowerCase();
      Array.from(productsSection.querySelectorAll("li")).forEach(li => {
         if (!li.children[0].textContent.toLowerCase().includes(criteria)) {
            li.style.display = "none";
         } else {
            li.style.display = "";
         }
      });
   }

   function buyProducts() {
      totalPrice = 0;
      totalPriceEl.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
      buyerSection.innerHTML = '';
   }

   function genEl(tag, content, attributes) {
      const element = document.createElement(tag);
      if (attributes) {
         Object.assign(element, attributes);
      }
      if (Array.isArray(content)) {
         content.forEach(appendEl)
      } else {
         appendEl(content);
      }
      function appendEl(node) {
         if (typeof node == 'string' || typeof node == "number") {
            node = document.createTextNode(node);
         }
         element.appendChild(node);
      }
      return element;
   }
}