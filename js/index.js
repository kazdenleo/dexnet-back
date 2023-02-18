const btn = document.querySelector('.info__button');
const popup = document.querySelector('.popup');
const exit = popup.querySelector('.popup__exit');

btn.addEventListener("click", () => {
    popup.classList.add('popup_active');
})

exit.addEventListener("click", () => {
    popup.classList.remove('popup_active');
})