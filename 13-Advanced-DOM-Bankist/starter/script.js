'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach((btn)=>{
  btn.addEventListener('click', openModal)
})


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



const message= document.createElement('div')
message.classList.add('cookie-message')

message.innerHTML = 'We use cookied for improved functionality and analytics.  <button class="btn btn--close-cookie">Got it!</button>'
header.prepend(message)//первый ребенок
// header.append(message)//последний ребенок
// header.append(message.cloneNode(true))

document.querySelector('.btn--close-cookie').addEventListener('click',
    function (){
  message.parentElement.removeChild(message)
    })

message.style.backgroundColor = '#37383d'
message.style.width = '120%'

message.style.height =Number.parseFloat(getComputedStyle(message).
    hight) + 30 + 'px';

doc