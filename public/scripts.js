const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardId = card.id
    window.location.href = `/course/${cardId}`
  })
}