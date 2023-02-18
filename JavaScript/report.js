var report = JSON.parse(localStorage.getItem("report")) || [];
let rightAnswer=0
let wrongAnswer=0
let NotAnswer=0


// display result
displayResult();

function displayResult() {
  let i = 1;
  let card = document.getElementById("card");

  // clear previous results
  card.innerHTML = "";

  // map report
  report.forEach((el) => {
    // question
    let question = document.createElement("h4");
    question.innerText = `Question ${i} - ${el.question}`;

    // options
    let optA = createParagraphElement("A", el.options[0]);
    let optB = createParagraphElement("B", el.options[1]);
    let optC = createParagraphElement("C", el.options[2]);
    let optD = createParagraphElement("D", el.options[3]);

    let status = checkAnswerStatus(el.correctAnswer, el.userResponse);

    // set color
    setColor(optA, "A", el.userResponse, el.correctAnswer);
    setColor(optB, "B", el.userResponse, el.correctAnswer);
    setColor(optC, "C", el.userResponse, el.correctAnswer);
    setColor(optD, "D", el.userResponse, el.correctAnswer);

    card.append(question, optA, optB, optC, optD, status);

    i++;
  });

//   short report
shortReport()

}

// check answer status
function checkAnswerStatus(correctAnswer, userResponse) {
  let message = "";

  if (userResponse.length == 0) {
    message = "Not Attempt.";
    NotAnswer++;
  } else if (correctAnswer == userResponse) {
    message = "Correct Answer.";
    rightAnswer++;
  } else {
    message = "Wront Answer.";
    wrongAnswer++;
  }

//   create p tag 
  let status = document.createElement("p");
  status.innerText = "Status - " + message;
  status.style.color = "#6d9ac4";
  status.style.fontWeight = "bold";
  return status;
}

// xreate options
function createParagraphElement(option, text) {
  let opt = document.createElement("p");
  opt.innerText = `${option} - ${text}`;
  return opt;
}

// set colors
function setColor(optElement, option, userResponse, correctAnswer) {
  let optColor = userResponse === option ? "red" : "black";

  let correctAnswerColor = correctAnswer === option ? "green" : "black";
  optElement.style.color = optColor;
  if (correctAnswer === option) {
    optElement.style.fontWeight = "bold";
    optElement.style.color = correctAnswerColor;
  }
}


// short report
function shortReport(){

    let rep = document.getElementById("report");

    let totalQuestion = rightAnswer + wrongAnswer + NotAnswer;

    let total = createParagraphElement("Total Question ", totalQuestion);
    total.style.fontWeight="bold"

    let right = createParagraphElement("Right Answer",rightAnswer);
    right.style.fontWeight="bold"
    right.style.color="green"

    let wrong = createParagraphElement("Wrong Answer ", wrongAnswer);
    wrong.style.fontWeight="bold"
    wrong.style.color="red"

    let notAttempt = createParagraphElement("Not Answer ", NotAnswer);
    notAttempt.style.fontWeight="bold"
    notAttempt.style.color="#6d9ac4"

    rep.append(total, right, wrong, notAttempt);
}
