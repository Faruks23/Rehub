document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question, index) {
    if (index === 0) {
      question.classList.add("open");
      const answer = question.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    question.addEventListener("click", function () {
      this.classList.toggle("open");
      const answer = this.nextElementSibling;
      if (this.classList.contains("open")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});
