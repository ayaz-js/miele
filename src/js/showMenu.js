import {
    categoriesContainerOvelay,
    categoriesTabsContainer,
    burgerMenuBtn
} from "./constants";

function showMenu() {
    categoriesContainerOvelay.classList.remove('products__categories-overlay--hidden')
    categoriesTabsContainer.classList.remove("products__categories-tabs--hidden");
}

burgerMenuBtn.addEventListener('click', showMenu)