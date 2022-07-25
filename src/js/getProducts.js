import { productsContainer } from './constants.js';
import renderProducts from './renderProducts.js';

fetch('https://mca.miele.kz/catalog/export-json.php', {
  mode: 'no-cors'
})
.then(response => response.json())
.then(data => renderProducts(data, productsContainer));