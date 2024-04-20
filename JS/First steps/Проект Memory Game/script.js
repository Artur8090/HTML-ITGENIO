const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.toggle('flip')
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}
function checkForMatch() {
    if (firstCard.dataset.itgenik === secondCard.dataset.itgenik) {
        disableCards();
        return;
    }
    unflipCards();
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard)
}
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    }, 1500);
}
cards.forEach(card => card.addEventListener('click', flipCard))