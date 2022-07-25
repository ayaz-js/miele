import {
    productsContainer,
    openPopupButton,
    closePopupButton,
    popupContent,
    popupOverlay,
    popup
} from './constants';

import renderProductInPopup from './renderProductInPopup';


import Counter from "./Counter";
import { dataProducts } from './meile-original'

const dataWithCounter = new Counter(dataProducts);
dataWithCounter.init()
dataWithCounter.showData()

function openPopup(id) {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderProductInPopup(id)
    addEventListeners()
    dataWithCounter.showData()
}

function closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
    removeEventListeners()
}

function closeOnEsc(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closePopup(popup);
    }
}

function countPlus(event) {
    const id = event.currentTarget.dataset.id
    dataWithCounter.increment(id)
}

function countMinus(event) {
    const id = event.currentTarget.dataset.id
    dataWithCounter.decrement(id)
}

function addEventListeners() {
    closePopupButton.addEventListener('click', closePopup)
    document.addEventListener('keyup', closeOnEsc);

    document.querySelectorAll('.popup__count-plus').forEach(item => {
        item.addEventListener('click', countPlus)
    })

    document.querySelectorAll('.popup__count-minus').forEach(item => {
        item.addEventListener('click', countMinus)
    })
}

function removeEventListeners() {
    closePopupButton.removeEventListener('click', closePopup)
    document.removeEventListener('keyup', closeOnEsc);

    document.querySelectorAll('.popup__count-plus').forEach(item => {
        item.removeEventListener('click', countPlus)
    })
    
    document.querySelectorAll('.popup__count-minus').forEach(item => {
        item.removeEventListener('click', countMinus)
    })
}

productsContainer.addEventListener('click', (event) => {
    const { target } = event
    const id = target.closest('article').dataset.id
    if (target && target.classList.contains('product-card__button')) {
        openPopup(id)
    }
})