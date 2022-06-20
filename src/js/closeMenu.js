import {
    categoriesContainerOvelay,
    categoriesTabsContainer,
    burgerMenuCloseBtn
} from "./constants";

if (window.screen.width < 780) {
    document.documentElement.style.overflowY = 'auto';
    categoriesTabsContainer.classList.add('products__categories-tabs--hidden');
}

function closeMenu() {
    categoriesTabsContainer.classList.add('products__categories-tabs--hidden');
    categoriesContainerOvelay.classList.add('products__categories-overlay--hidden');
}

burgerMenuCloseBtn.addEventListener('click', closeMenu)
categoriesContainerOvelay.addEventListener('click', closeMenu)