document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.card-inner').classList.toggle('is-flipped');
    });
});
