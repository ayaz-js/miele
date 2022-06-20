import {
    categoriesContainerOvelay,
    categoriesTabsContainer,
    burgerMenuBtn
} from "./constants";

function showCategories() {
    categoriesContainerOvelay.classList.remove('products__categories-overlay--hidden')
    categoriesTabsContainer.classList.remove('products__categories--hidden');
}

burgerMenuBtn.addEventListener('click', showCategories)