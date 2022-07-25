import {
  productPopupArray
} from "./constants";

export default function renderProductInPopup(id) {
      console.log(id);
      productPopupArray.push(id)
      console.log(productPopupArray)
}