function solve() {
   let sendButton = document.getElementById("send");
   let newMessageField = document.getElementById("chat_messages");
   let input = document.getElementById("chat_input");

   sendButton.addEventListener('click', (e => {
      let newDiv = document.createElement('div');
      newDiv.innerHTML = input.value;
      newDiv.classList.add('message', 'my-message');

      newMessageField.appendChild(newDiv);
      input.value = "";
   }))
}

