let mcq = [
  {
    id: 1,
    question: "What does HTML stands for?",
    options: [
      "Hypertext Machine language.",
      "Hypertext and links markup language.",
      "Hypertext Markup Language.",
      "Hightext machine language.",
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    question:
      "Which of the following HTML Elements is used for making any text bold ?",
      options: ["<p>", "<i>", "<li>", "<b>"],
    correctAnswer: "D",
  },
  {
    id: 3,
    question:
      "Which of the following HTML element is used for creating an unordered list?",
    options: ["<ui>", "<i>", "<p>", "<ul>"],
    correctAnswer: "D",
  },
  {
    id: 4,
    question:
      "Which of the following is the correct way of creating an hyperlink in HTML?",
    options: [
      "<a>www.geeksforgeeks.org <Geeksforgeeks /a>",
      "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
      "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
      "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>",
    ],
    correctAnswer: "C",
  },
  {
    id: 5,
    question: "What is the purpose of CSS in web development?",
    options: [
      "To add interactivity to a web page",
      "To structure and define the content of a web page",
      "To create and modify dynamic effects on a web page",
      "To style the visual presentation of a web page",
    ],
    correctAnswer: "D",
  },
  {
    id: 6,
    question:
      "Which property is used in CSS to change the background color of an element?",
    options: ["color", "background-color", "font-size", "margin"],
    correctAnswer: "B",
  },
  {
    id: 7,
    question:
      "Which programming language is used to add interactivity to web pages?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    correctAnswer: "C",
  },
  {
    id: 8,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Complex Style Sheets",
    ],
    correctAnswer: "A",
  },
  {
    id: 9,
    question:
      "Which of the following is not a valid value for the display property in CSS?",
    options: ["inline", "block", "none", "red"],
    correctAnswer: "D",
  },
  {
    id: 10,
    question:
      "Which of the following is a valid way to add CSS to an HTML document?",
    options: [
      '<style><css></style>',
      "<link rel='stylesheet' href='style.css'>",
      "<script src='style.css'></script>",
      "<head><css></head>",
    ],
    correctAnswer: "B",
  },
];
 


let questionNumber = 0;
let userResponse = ""
const question = document.getElementById("question");
const optA = document.getElementById("optA");
const optB = document.getElementById("optB");
const optC = document.getElementById("optC");
const optD = document.getElementById("optD");



// check if user login or not

isLogin()
function isLogin() {

  let data = JSON.parse(localStorage.getItem("loginSuccess"))

  console.log(data)
  
  if(!data){
    window.open("signup.html", "_self")
  }
  
}


// display question to answer
function displayQuestion(){
  

  let el = mcq[questionNumber];
  question.innerHTML=`<p>Question ${el.id} - ${el.question}</p>`;
  
  optA.innerText=`A - ${el.options[0]} `;
  optB.innerText=`B - ${el.options[1]} `;
  optC.innerText=`C - ${el.options[2]} `;
  optD.innerText=`D - ${el.options[3]} `;
}


// change selected option color
function setOptionStyle(opt) {
  opt.style.backgroundColor = "#ee5684";
  opt.style.color = "white";  

userResponse = opt.innerHTML.split(" - ")
userResponse = userResponse[0]


}

// reset option color to default
function resetOptionStyle(opt) {
  opt.style.backgroundColor = "white";
  opt.style.color = "black";
}

// option click
function setOptionClick(opt) {
  opt.addEventListener("click", () => {
    setOptionStyle(opt);
    [optA, optB, optC, optD]
      .filter((x) => x != opt)
      .forEach((x) => resetOptionStyle(x));
  });
}

[optA, optB, optC, optD].forEach((x) => setOptionClick(x));

// call displayQuestion() to display first question
displayQuestion();


// prev question button
document.getElementById("prev").addEventListener("click", () => {

  if(questionNumber>0){

    // change question
  questionNumber--;
  displayQuestion();

  // reset styling
  [optA, optB, optC, optD]
  .forEach((x) => resetOptionStyle(x));
}

});


// next question button
document.getElementById("next").addEventListener("click", () => {

if(questionNumber==10){
window.open("report.html", "_self")
}
else{
  saveUserResponse()

  // change question
  questionNumber++;
  displayQuestion();

  // reset styling
  [optA, optB, optC, optD]
  .forEach((x) => resetOptionStyle(x));

  }

});


// save user response
function saveUserResponse(){

  let el = mcq[questionNumber];
  
  let obj={
    question: el.question,
    options: el.options,
    correctAnswer: el.correctAnswer,
    userResponse:userResponse,
  }

  var report=JSON.parse(localStorage.getItem("report")) || []; 
  report.push(obj);
  localStorage.setItem('report',JSON.stringify(report));

userResponse=""
}