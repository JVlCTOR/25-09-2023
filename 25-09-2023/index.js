const modal = document.getElementById("modal")
const openModal = document.querySelector('.openAll')
const closeModal = document.querySelector('.closeAll')
const openn = document.getElementById("openModal")
const closee = document.getElementById('closee')
// function openModal(){
// modal.style.display = 'flex'
// }
// function closeModal(){
// modal.style.display = 'none'
// }

function abrir(){
modal.classList.add('openAll')
modal.classList.remove('closeAll')
}
function fechar(){
modal.classList.add('closeAll')
modal.classList.remove('openAll')
}
modal.addEventListener('click', fechar)
openn.addEventListener('click', abrir)
closee.addEventListener('click', fechar)