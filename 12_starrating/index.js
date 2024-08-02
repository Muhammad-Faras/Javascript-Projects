const stars = document.querySelectorAll('.fa-star');
const ratingtext = document.querySelector('.rating-text');
let currentTotalSelectedStars = -1;

stars.forEach((staritem, index) => {
    staritem.dataset.rating = index + 1;
    staritem.addEventListener('mouseover', handleMouseOver);
    staritem.addEventListener('click', handleMouseClick);
    staritem.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseOver(event) {
    const currentRatingValue = event.target.dataset.rating;
    if (!currentRatingValue) return;
    handleUpdateRatingState(parseInt(currentRatingValue));
}

function handleUpdateRatingState(currentRatingValue) {
    for (let i = 0; i < 5; i++) {
        if (i < currentRatingValue) {
            stars[i].style.color = 'red';
        } else {
            stars[i].style.color = 'black';
        }
    }
}

function handleMouseClick(event) {
    const currentRatingValue = event.target.dataset.rating;
    currentTotalSelectedStars = currentRatingValue
    handleUpdateRatingState(currentTotalSelectedStars);
    ratingtext.textContent = currentTotalSelectedStars;
}


function handleMouseLeave(event) {
    handleUpdateRatingState(currentTotalSelectedStars)
}