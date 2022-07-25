import { productsContainer } from './constants.js';
import { dataProducts } from './meile-original.js';

import generateProducts from './generateProducts.js';

export default function renderProducts(data, wrapper) {
    wrapper.innerHTML = '';
    data.forEach(item => wrapper.append(generateProducts(item)))
}

renderProducts(dataProducts, productsContainer)