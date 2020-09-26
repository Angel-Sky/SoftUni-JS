function solve() {
   let outputArea = document.querySelector("textarea");
   let arrayOfButtons = [].slice.call(document.getElementsByTagName("button"));
   let eventArea = document.querySelector(".shopping-cart");
   let totalPrice = 0;
   let boughtItems = new Set();

   let listener = (e) => {
      if (e.target.className === "add-product") {
         let productName = e.target.parentElement.parentElement.querySelector(".product-title").textContent;
         let productPrice = e.target.parentElement.parentElement.querySelector(".product-line-price").textContent;

         totalPrice += Number(productPrice);
         boughtItems.add(productName);

         outputArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`

      } else if (e.target.className == "checkout") {
         eventArea.removeEventListener("click", listener);
         outputArea.textContent += `You bought ${Array.from(boughtItems).join(", ")} for ${totalPrice.toFixed(2)}.`;
         
         arrayOfButtons.forEach(el => {
            el.disabled = true;
         })
      }
   }

   eventArea.addEventListener("click", listener);
}