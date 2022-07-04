import {
    productsContainer
} from './constants.js';

import {
    data
} from './miele.js'

import generateProducts from './generateProducts.js';

export default function renderProducts(data, wrapper) {
    wrapper.innerHTML = '';
    data.forEach((item) => {
        wrapper.append(generateProducts(item))
    })
}

renderProducts(data, productsContainer)