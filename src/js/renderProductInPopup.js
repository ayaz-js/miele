import {
  productPopupArray
} from "./constants";
import createItemThumb from "./createItemThumb";


import { dataProducts } from "./meile-original.js"

export default function renderProductInPopup(id) {
      productPopupArray.push(id)
      console.log(productPopupArray);
      const filtered = dataProducts.filter(item => productPopupArray.includes(item.id))

      document.querySelector('.popup__thumbs').innerHTML = ''
      filtered.forEach(good => {
        document.querySelector('.popup__thumbs').append(createItemThumb(good))
      })
}