import {
    categoriesContainerOvelay,
    categoriesTabsContainer,
    burgerMenuCloseBtn
} from "./constants";

function closeMenu() {
    categoriesTabsContainer.classList.add('products__categories--hidden');
    categoriesContainerOvelay.classList.add('products__categories-overlay--hidden');
}

burgerMenuCloseBtn.addEventListener('click', closeMenu)
categoriesContainerOvelay.addEventListener('click', closeMenu)