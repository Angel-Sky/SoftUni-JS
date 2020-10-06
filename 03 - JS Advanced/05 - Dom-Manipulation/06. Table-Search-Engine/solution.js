function solve() {
   let input = document.querySelector("#searchField");
   document.querySelector("#searchBtn").addEventListener("click", onSearch);
   
   function onSearch() {
      let searchedText = input.value.toLowerCase().trim();

      if (searchedText.length !== 0) {
         Array.from(document.querySelector("tbody").rows)
            .forEach(row => {
               if (row.textContent.toLowerCase().includes(searchedText)) {
                  row.classList.add("select");
               } else {
                  row.classList.remove("select");
               }
            })

         input.value = "";
      }
   }
}
