import {
    categoriesTabsContainer,
    productsContainer,
} from './constants.js'
import { dataProducts } from './meile-original.js';
import renderProducts from './renderProducts.js'
import closeCategories from './closeCategories.js';

let selectedTab = document.querySelector('.products__categories-tab');
selectedTab.classList.add('products__categories-tab--active');

function highlight(tab) {
    if (selectedTab) {
        selectedTab.classList.remove('products__categories-tab--active');
    }

    selectedTab = tab;
    selectedTab.classList.add('products__categories-tab--active');
}

filterProducts('Стиральные машины')

categoriesTabsContainer.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName !== "LI") return    
    highlight(target)
    filterProducts(target.dataset.categories)
})

function filterProducts(dataAttr) {
    const filtered = dataProducts.filter(data => data.t === dataAttr)
    renderProducts(filtered, productsContainer)
    closeCategories();
}