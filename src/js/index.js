import '../scss/index.scss'
import './swiper-slider.js'
import './showTabContent.js'
import './showCategories.js'
import './closeCategories.js'
import './selectDescription.js'
import './selectCategories.js'
import './generateProducts.js'
import './renderProducts.js'
import { dataProducts } from './meile-original'
import { productsContainer, cartButton, popup } from './constants'
import PopupClass from './PopupClass.js'

const popupInstance = new PopupClass(dataProducts)
popupInstance.init()

productsContainer.addEventListener('click', (event) => {
  const  target = event.target
  const id = target.closest('article').dataset.id
  if (target && target.classList.contains('product-card__button')) {
    popupInstance.openPopup(id)
  }
})

cartButton.addEventListener('click', ()=> {
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  popupInstance.openCart()
})