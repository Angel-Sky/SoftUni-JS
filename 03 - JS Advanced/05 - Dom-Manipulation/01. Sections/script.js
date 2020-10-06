function create(words) {
   let contentDiv = document.querySelector('#content');
   contentDiv.addEventListener('click', display);

   for (const line of words) {
       let newDiv = document.createElement('div');
       newDiv.innerHTML = `<p style="display:none;">${line}</p>`;
       contentDiv.appendChild(newDiv);
   }

   function display(e) {
       e.target.children[0].style.display = 'block';
   }
}