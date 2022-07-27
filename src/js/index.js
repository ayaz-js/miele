import '../scss/index.scss'
import './swiper-slider.js'
import './showTabContent.js'
import './showCategories.js'
import './closeCategories.js'
import './selectDescription.js'
import './selectCategories.js'
import './generateProducts.js'
import './renderProducts.js'
import Cleave from 'cleave.js';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.kz';
import { dataProducts } from './meile-original'
import { productsContainer, cartButton, popup, popupForm } from './constants'
import PopupClass from './PopupClass.js'

var cleave = new Cleave('.popup__number', {
  phone: true,
  phoneRegionCode: 'KZ',
  prefix: '+7',
  delimiter: '-',
});

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

popupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  popupInstance.sendFormData();
})