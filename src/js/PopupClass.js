import {
  closePopupButton,
  popup,
  popupButton,
  popupOverlay,
  inputName,
  inputPhone,
  inputEmail,
  successPopup,
  popupWrapper,
  words
} from './constants';

import createItemThumb from './createItemThumb';
import { declOfNum } from './util';

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
    popupWrapper.classList.remove('popup__wrapper--hide')
    this._renderProductsInPopup()
    this._calculatePrice()
    this._addEventListeners()
    this._countProducts()
  }

  _countProducts() {
    const products = Array.from(this.chosenProducts).map(product => product.count)
    const reduced = products.reduce((previousValue, currentValue) => previousValue + currentValue,
     0
    );
    document.querySelector('.cart__word').textContent = declOfNum(reduced, words)
    document.querySelector('.cart__number').textContent = reduced
  }

  _closePopup() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
    successPopup.classList.remove('popup__success--show')
    popup.classList.remove('popup__align_center');
    this._removeEventListeners();
  }

  _closeOnEsc(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this._closePopup(popup);
    }
  }

  _addEventListeners() {
    popupButton.addEventListener('click', this._closePopup)
    closePopupButton.forEach(item => {
      item.addEventListener('click', this._closePopup)
    })
    popupOverlay.addEventListener('click', this._closePopup)
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
    closePopupButton.forEach(item => {
      item.removeEventListener('click', this._closePopup)
    })
    popupOverlay.removeEventListener('click', this._closePopup)
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
    this._countProducts()
  }

  _countMinus(event) {
    const id = event.currentTarget.dataset.id
    this._decrement(id)
    this._countProducts()
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
    this.price = 0

    this.chosenProducts.forEach(item => {
      const productPrice = parseInt(item.p, 10)
      const count = item.count
      this.price += (productPrice * count)
    })

    document.querySelector('.popup__total-price').textContent = this.price.toLocaleString() + ' ₸'
  }

  sendFormData() {
    const formData = new FormData()
    formData.append('ФИО', inputName.value)
    formData.append('Номер телефона', inputPhone.value)
    formData.append('Email', inputEmail.value)
    formData.append('Итоговая цена', this.price.toLocaleString() + ' ₸')
    const products = Array.from(this.chosenProducts).map(product => `${product.n} - ${product.count}шт.`)
    formData.append('Заказ', products.join(', '))
    fetch('https://script.google.com/macros/s/AKfycbxWgINvZ0ZEsxu29LZOAZKdpb8pYNfjvxPYlWegOeGnxMFRrC2gzJP3YaW_Ab_7vFaTMQ/exec', {
    method: 'POST',
    body: formData,
    })
    popupWrapper.classList.add('popup__wrapper--hide')
    popup.classList.add('popup__align_center');
    successPopup.classList.add('popup__success--show')
    inputName.value = ''
    inputPhone.value = ''
    inputEmail.value = ''
    this.chosenProducts = null
    this.chosenProducts = new Set()
  }

  init() {
    this.initialData = this.initialData.map(item => ({
      ...item,
      count: 0
    }))
  }
}

export default PopupClass;