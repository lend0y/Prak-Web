const quizData = [
  {
    question: "Siapa pencipta bahasa pemrograman JavaScript?",
    options: ["Brendan Eich", "James Gosling", "Guido van Rossum", "Van Gogh"],
    answer: 0
  },
  {
    question: "Framework CSS gelap yang populer saat ini?",
    options: ["Bootstrap", "TailwindCSS", "Bulma", "Material UI"],
    answer: 1
  },
  {
    question: "Tahun berapa JavaScript pertama kali dirilis?",
    options: ["1993", "1995", "2000", "2005"],
    answer: 1
  },
  {
    question: "Mana yang termasuk ES6 feature?",
    options: ["Arrow Function", "goto statement", "Pointer", "Assembly Macro"],
    answer: 0
  },
  {
    question: "Apa kepanjangan DOM?",
    options: ["Document Object Model", "Data Object Management", "Dynamic Online Mode", "Disk Operating Method"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const loadQuestion = () => {
  const q = quizData[currentQuestion];
  $("#question").text(q.question);
  $("#progress").text(`Soal ${currentQuestion + 1} dari ${quizData.length}`);

  $("#options").empty();
  q.options.forEach((opt, i) => {
    $("#options").append(`
      <button class="option w-full bg-gray-700 hover:bg-gray-600 text-left px-4 py-2 rounded transition" data-index="${i}">
        ${String.fromCharCode(65 + i)}. ${opt}
      </button>
    `);
  });

  $("#nextBtn").hide();
};

$(document).on("click", ".option", function() {
  const selected = $(this).data("index");
  const correct = quizData[currentQuestion].answer;

  if (selected === correct) {
    $(this).removeClass("bg-gray-700").addClass("bg-green-600");
    score++;
  } else {
    $(this).removeClass("bg-gray-700").addClass("bg-red-600");
    $(`.option[data-index=${correct}]`).removeClass("bg-gray-700").addClass("bg-green-600");
  }

  $(".option").prop("disabled", true);
  $("#nextBtn").show();
});

$("#nextBtn").on("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    $("#quiz #question").hide();
    $("#options").hide();
    $("#nextBtn").hide();
    $("#progress").hide();

    $("#result")
      .removeClass("hidden")
      .text(`Skor Akhir: ${score} dari ${quizData.length} 👿`);

    $("#restartBtn").show();
  }
});

$("#restartBtn").on("click", () => {
  currentQuestion = 0;
  score = 0;
  $("#quiz #question").show();
  $("#options").show();
  $("#progress").show();
  $("#result").hide();
  $("#restartBtn").hide();
  loadQuestion();
});

loadQuestion();
