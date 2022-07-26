import {
  closePopupButton,
  popup,
  cartButton,
  popupButton
} from './constants';

import createItemThumb from './createItemThumb';

class PopupClass {
  constructor(initialData) {
    this.initialData = initialData
    this.chosenProducts = new Set()
    this.price = 0;
    this._increment = this._increment.bind(this)
    this._countPlus = this._countPlus.bind(this)
    this._decrement = this._decrement.bind(this)
    this._countMinus = this._countMinus.bind(this)
    this._closePopup = this._closePopup.bind(this)
    this._closeOnEsc = this._closeOnEsc.bind(this)
  }

  openPopup(id) {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    const foundProduct = this.initialData.find(item => item.id === id)
    foundProduct.count++

    this.chosenProducts.add(foundProduct)
    this.openCart()
  }

  openCart() {
    this._renderProductsInPopup()
    this._calculatePrice()
    this._addEventListeners()
  }

  _closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
    this._removeEventListeners();
  }

  _closeOnEsc(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this._closePopup(popup);
    }
  }

  _addEventListeners() {
    popupButton.addEventListener('click', this._closePopup)
    closePopupButton.addEventListener('click', this._closePopup)
    document.addEventListener('keyup', this._closeOnEsc);

    document.querySelectorAll('.popup__count-plus').forEach(item => {
      item.addEventListener('click', this._countPlus)
    })

    document.querySelectorAll('.popup__count-minus').forEach(item => {
      item.addEventListener('click', this._countMinus)
    })
  }

  _removeEventListeners() {
    popupButton.removeEventListener('click', this._closePopup)
    closePopupButton.removeEventListener('click', this._closePopup)
    document.removeEventListener('keyup', this._closeOnEsc);

    document.querySelectorAll('.popup__count-plus').forEach(item => {
      item.removeEventListener('click', this._countPlus)
    })

    document.querySelectorAll('.popup__count-minus').forEach(item => {
      item.removeEventListener('click', this._countMinus)
    })
  }

  _countPlus(event) {
    const id = event.currentTarget.dataset.id
    this._increment(id)
  }

  _countMinus(event) {
    const id = event.currentTarget.dataset.id
    this._decrement(id)
  }

  _increment(id) {
    const target = this.initialData.find(item => item.id === id)
    if (target.count >= 0) {
      target.count++
      this._calculatePrice()
    }

    this._changeTemplate(id, target.count)
  }

  _decrement(id) {
    const target = this.initialData.find(item => item.id === id)
    if (target.count > 0) {
      target.count--
      this._calculatePrice()
    }

    this._changeTemplate(id, target.count)
  }

  _changeTemplate(id, count) {
    if (count > 0) {
      const button = document.querySelector(`.popup__count-plus[data-id="${id}"]`)
      const popupCount = button.closest('.popup__count')
      popupCount.querySelector('.popup__count-number').textContent = count
    } else {
      const button = document.querySelector(`.popup__count-minus[data-id="${id}"]`)
      const popupCount = button.closest('.popup__product-container')
      popupCount.remove()
      const removedProduct = Array.from(this.chosenProducts).find(item => item.id === id)
      this.chosenProducts.delete(removedProduct)
    }
  }

  _renderProductsInPopup() {
    document.querySelector('.popup__thumbs').innerHTML = ''
    this.chosenProducts.forEach(good => {
      document.querySelector('.popup__thumbs').append(createItemThumb(good))
    })
  }

  _calculatePrice() {
    let price = 0

    this.chosenProducts.forEach(item => {
      const productPrice = parseInt(item.p, 10)
      const count = item.count
      price += (productPrice * count)
    })

    document.querySelector('.popup__total-price').textContent = price.toLocaleString() + ' ₸'
  }

  init() {
    this.initialData = this.initialData.map(item => ({
      ...item,
      count: 0
    }))
  }
}

export default PopupClass;