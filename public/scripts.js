const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = modalOverlay.querySelector('.modal')
const maxButton = modal.querySelector('.maximize-modal')

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardId = card.id
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`
  })
}

document.querySelector('.close-modal')
  .addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ``
    modal.classList.remove('maximized')
    maxButton.classList.replace('fa-window-minimize', 'fa-window-maximize')
  })

maxButton.addEventListener('click', () => {
  if(modal.classList.contains('maximized')) {
    modal.classList.remove('maximized')
    maxButton.classList.replace('fa-window-minimize', 'fa-window-maximize')
  } else {
    modal.classList.add('maximized')
    maxButton.classList.replace('fa-window-maximize', 'fa-window-minimize')
  }
})