function solve(){
   let color = "#413f5e";
   let rows = [...document.querySelectorAll("tbody > tr")];
   document.querySelector(".minimalistBlack > tbody").addEventListener("click", changeBackground);

   function changeBackground(e) {
      let activeRow = e.target.parentElement;
      if (activeRow.hasAttribute("style")) {
         activeRow.removeAttribute("style");
      } else {
         rows.forEach(row => {
            row.removeAttribute("style")
         })
         
         activeRow.style.backgroundColor = color;
      }
   }
}
