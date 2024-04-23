const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.toggle('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}
function resetBoard(){
    [hasFlippedCard,lockBoard] = [false,false]
    [firstCard,secondCard] = [null,null]
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
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard();
    }, 1500);
}
(function shufle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard))