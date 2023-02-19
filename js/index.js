const btn = document.querySelector('.info__button');
const popup = document.querySelector('.popup');
const exit = popup.querySelector('.popup__exit');

btn.addEventListener("click", () => {
    popup.classList.add('popup_active');
})

function closePopup() {
    popup.classList.remove('popup_active');
}

exit.addEventListener("click", () => {
    closePopup();
})

popup.addEventListener('mousedown', (e) => {
	var container = document.querySelector('.popup__container');
    if (!container.contains(e.target) & popup.classList.contains('popup_active')) {
        closePopup();
    }
});

const langBtn = document.querySelector('.header__lang');
const langList = document.querySelector('.header__language-items');
langBtn.addEventListener("click", () => {
    langList.classList.toggle('header__language-items_active');
})

window.addEventListener('mousedown', (e) => {
	var container = document.querySelector('.header__language-items');
    if (!container.contains(e.target) & langList.classList.contains('header__language-items_active')) {
        langList.classList.remove('header__language-items_active');
    }
});

//Форма
const popupBtns = document.querySelectorAll('.popupbtn');
const line = document.querySelector('.popup__line');
const popupInfo = popup.querySelectorAll('.popup__pay-info')
popupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('popupbtn_left')) {
            line.classList.remove('popup__line_right')
            line.classList.add('popup__line_left')
            popupInfo[1].style.display = "none";
            popupInfo[0].style.display = "flex";
        } else if (btn.classList.contains('popupbtn_right')) {
            line.classList.remove('popup__line_left')
            line.classList.add('popup__line_right')
            popupInfo[0].style.display = "none";
            popupInfo[1].style.display = "flex";
        }
    })
})