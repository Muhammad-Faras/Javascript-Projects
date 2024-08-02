const data = [
    {
        id: 1,
        question: 'What is my name?',
        answer: 'Muhammad Faras',
    },
    {
        id: 2,
        question: 'What is my name?',
        answer: 'Muhammad Faras',
    },
];

const maincontainer = document.querySelector('.main-container');

function accordian() {
    maincontainer.innerHTML = data.map((dataitem) => `
      <div class="container-item">
        <div class="container-question">
          ${dataitem.question}
          <i class="fas fa-chevron-down arrow-icon"></i>
        </div>
        <div class="container-answer" style="display: none;">${dataitem.answer}</div>
      </div>
    `).join(" ");
}

accordian();

const containerQuestions = document.querySelectorAll('.container-question');

containerQuestions.forEach((question, index) => {
    question.addEventListener('click', function () {
        const answer = maincontainer.querySelectorAll('.container-answer')[index];
        const arrowIcon = question.querySelector('.arrow-icon');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrowIcon.classList.remove('rotate');
        } else {
            answer.style.display = 'block';
            arrowIcon.classList.add('rotate');
        }
    });
});
