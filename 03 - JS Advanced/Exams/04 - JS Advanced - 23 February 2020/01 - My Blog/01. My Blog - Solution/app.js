function solve() {
   const mainSection = document.querySelector("main > section");
   document.querySelector(".create").addEventListener("click", renderArticle);

   function renderArticle(e) {
      e.preventDefault();
      let autor = document.querySelector("#creator").value;
      let title = document.querySelector("#title").value;
      let category = document.querySelector("#category").value;
      let content = document.querySelector("#content").value;

      let btnDelete = genEl("button", "Delete", { className: "btn delete" });
      let btnArchive = genEl("button", "Archive", { className: "btn archive" });

      let newArticle = genEl("article", [
         genEl("h1", `${title}`),
         genEl("p", ['Category:', genEl('strong', `${category}`)]),
         genEl("p", ['Creator:', genEl('strong', `${autor}`)]),
         genEl("p", `${content}`),
         genEl("div", [btnDelete, btnArchive], { className: "buttons" })
      ]);


      btnDelete.addEventListener("click", (e) => {
         mainSection.removeChild(newArticle);
      });

      btnArchive.addEventListener("click", (e) => {
         let archiveList = document.querySelector(".archive-section > ul");
         archiveList.appendChild(genEl("li", title));
         mainSection.removeChild(newArticle);

         let archivedTitles = [...archiveList.querySelectorAll("li")];
         archiveList.innerHTML = "";

         archivedTitles
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(title => archiveList.appendChild(title))
      });

      mainSection.appendChild(newArticle);
   }

   /**
 * e.g. genEl("div", [genEl(p, "I'm awesome"), {id: "awesome"}]))
 * @param {string} tag Tag name of DOM element
 * @param {array} content Can be [array] or string
 * @param {object} attributes {Object property, e.g. className: silver}
 */

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
         if (typeof node == 'string') {
            node = document.createTextNode(node);
         }
         element.appendChild(node);
      }

      return element;

   }
}
