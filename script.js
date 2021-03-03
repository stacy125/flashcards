const flashCard = document.querySelectorAll('.flip-inner')
for (let i=0; i < flashCard.length; i++) {
    flashCard[i].addEventListener('click', () => {
        flashCard[i].classList.toggle('flip')
    })
}
