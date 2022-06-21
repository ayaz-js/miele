import {
    categoriesContainerOvelay,
    categoriesTabsContainer,
    burgerMenuCloseBtn
} from "./constants";

export default function closeCategories() {
    categoriesTabsContainer.classList.add('products__categories--hidden');
    categoriesContainerOvelay.classList.add('products__categories-overlay--hidden');
}

burgerMenuCloseBtn.addEventListener('click', closeCategories)
categoriesContainerOvelay.addEventListener('click', closeCategories)