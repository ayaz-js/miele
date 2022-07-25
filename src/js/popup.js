import {
    productsContainer,
    openPopupButton,
    closePopupButton,
    popupContent,
    popupOverlay,
    popup
} from './constants';

import renderProductInPopup from './renderProductInPopup';

function openPopup(id) {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderProductInPopup(id)
    addEventListeners()
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

function addEventListeners() {
    closePopupButton.addEventListener('click', closePopup)
    document.addEventListener('keyup', closeOnEsc);
}

function removeEventListeners() {
    closePopupButton.removeEventListener('click', closePopup)
    document.removeEventListener('keyup', closeOnEsc);
}

productsContainer.addEventListener('click', (event) => {
    const { target } = event
    const id = target.closest('article').dataset.id
    if (target && target.classList.contains('product-card__button')) {
        openPopup(id)
    }
})