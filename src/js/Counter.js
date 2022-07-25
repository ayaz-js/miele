import calculatePrice from "./utils"

class Counter {
  constructor(initialData) {
    this.initialData = initialData
    this.transformedData = null
  }

  increment(id) {
    const target = this.initialData.find(item => item.id === id)
    if (target.count >= 0) {
      target.count++
      this.changePrice()
    }
    
    this.changeTemplate(id, target.count)
  }

  decrement(id) {
    const target = this.initialData.find(item => item.id === id)
    if (target.count > 1) {
      target.count--
      this.changePrice()
    }
    this.changeTemplate(id, target.count)
  }

  changePrice() {
    const container = document.querySelector('.popup__thumbs')
    const buttons = Array.from(container.querySelectorAll('.popup__count-plus'))
    const filteredIds = buttons.map(item => item.dataset.id)
    const filteredProducts = []; 
    filteredIds.forEach(id => {
      const product = this.initialData.find(item => item.id === id)
      filteredProducts.push(product)
    })

    calculatePrice(filteredProducts)
  }

  changeTemplate(id, count) {
    console.log(count)
    if (count > 0) {
      const button = document.querySelector(`.popup__count-plus[data-id="${id}"]`)
      const popupCount = button.closest('.popup__count')
      popupCount.querySelector('.popup__count-number').textContent = count
    }
  }

  init() {
    this.transformedData = this.initialData.map(item => item.count = 1)
  }

  showData() {
    console.log(this.initialData)
  }
}

export default Counter;