const createbtn = document.querySelector('.create-btn');
const formsection = document.querySelector('.form-section');
const deleteAllBtn = document.querySelector('.delete-all-btn');
createbtn.addEventListener('click', function () {
    formsection.style.display = 'block'
})

const closebtn = document.querySelector('.close-btn');
closebtn.addEventListener('click', function () {
    formsection.style.display = 'none';
})

// Add event listener for the delete all button in the navbar
deleteAllBtn.addEventListener('click', function () {
    // Remove all cards
    cardsContainer.innerHTML = '';
});

const form = document.querySelector('.flashcard-form');
const cardsContainer = document.querySelector('.cards-container');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const question = document.querySelector('#question').value;
    const answer = document.querySelector('#answer').value;

    // Create a new card element
    const card = document.createElement('div');
    card.classList.add('card');

    card.addEventListener('mouseover', function () {
        answerText.style.display = 'block';
    })
    card.addEventListener('mouseout', function () {
        answerText.style.display = 'none';
    })
    // Create and append the question and answer to the card
    const questionText = document.createElement('div');
    questionText.classList.add('question');
    questionText.textContent = `Question: ${question}`;

    const answerText = document.createElement('div');
    answerText.classList.add('answer');
    answerText.textContent = `Answer: ${answer}`;
    answerText.style.display = 'none'

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
        card.remove(); // Remove the specific card
    });

    card.appendChild(questionText);
    card.appendChild(answerText);
    card.appendChild(deleteButton);
    // Append the card to the container
    cardsContainer.appendChild(card);

    form.reset();
})
