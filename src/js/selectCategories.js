// import clickTabs from "./clickTabs";
// import hideTabContent from "./hideTabContent";
// import showTabContent from "./showTabContent";

// import {
//     categoriesTabsContainer,
//     categoriesTabsItem,
//     categoriesTabClass,
//     categoriesTabActive,
//     productsContainer
// } from "./constants";

// clickTabs(categoriesTabsContainer, categoriesTabsItem, categoriesTabClass, productsContainer, categoriesTabActive)
// hideTabContent(productsContainer, categoriesTabsItem, categoriesTabActive)
// showTabContent(0, productsContainer, categoriesTabsItem, categoriesTabActive)

import {
    data
} from './miele.js'

import {
    categoriesTabsContainer,
    productsContainer
} from './constants.js'

import renderProducts from './renderProducts.js'

// console.log(data[0].t)
// data.filter(data => console.log(data.t))

categoriesTabsContainer.addEventListener('click', (event) => {
    const {
        target
    } = event
    const filtered = data.filter(data => data.t === target.dataset.categories)
    console.log(filtered)
    renderProducts(filtered, productsContainer)
})