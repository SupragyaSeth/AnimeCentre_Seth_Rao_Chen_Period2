
const Questions = [
  {
    id: 0,
    q: "Who is the main character in KonoSuba?",
    a: [
      { text: "Kazuma Satou", isCorrect: true },
      { text: "Tanjiro Kamado", isCorrect: false },
      { text: "Eren Yeager", isCorrect: false },
      { text: "Batman", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Which anime is the character Rem from?",
    a: [
      { text: "Tokyo Ghoul", isCorrect: false },
      { text: "Avengers: Endgame", isCorrect: false },
      { text: "Demon Slayer", isCorrect: false },
      { text: "Re:Zero", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "Which character has the ability to cast explosion magic?",
    a: [
      { text: "Light Yagami", isCorrect: false },
      { text: "Megumin", isCorrect: true },
      { text: "John Cena", isCorrect: false },
      { text: "Subaru Natsuki", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Which show involves Eren and his foster sister Mikasa?",
    a: [
      { text: "My Hero Academia", isCorrect: false },
      { text: "KonoSuba", isCorrect: false },
      { text: "Attack on Titan", isCorrect: true },
      { text: "Thomas and Friends", isCorrect: false },
    ],
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("Check");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "Correct";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "Incorrect";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 3) {
    id++;
    iterate(id);
    console.log(id);
  }
});
