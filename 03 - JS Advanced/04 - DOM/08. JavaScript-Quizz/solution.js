function solve() {
    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let sections = document.getElementsByTagName("section");
    let resultDiv = document.querySelector(".results-inner");
    let userRightAnswers = 0, currentStep = 0;

    let handler = (e) => {
      if (e.target.className === "answer-text") {

        if (rightAnswers.includes(e.target.innerText)) {
          userRightAnswers++;
        } 

        sections[currentStep].style.display = "none";
        currentStep++;

        if (currentStep < sections.length) {
          sections[currentStep].style.display = "block";
        }

        if (currentStep == sections.length) {
          document.querySelector("#quizzie").removeEventListener('click', handler);
          document.querySelector("#results").style.display = "block";

          if (rightAnswers.length == userRightAnswers) {
            resultDiv.innerHTML = "You are recognized as top JavaScript fan!";
          } else {
            resultDiv.innerHTML = `You have ${userRightAnswers} right answers`;
          }

         }
      }
    }

    document.querySelector("#quizzie").addEventListener('click', handler);
}
