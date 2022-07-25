export default function calculatePrice(filtered) {
  let price = 0

  filtered.forEach(item => {
    const productPrice = parseInt(item.p, 10)
    const count = item.count
    price += (productPrice * count)
  })

  document.querySelector('.popup__total-price').textContent = price.toLocaleString() + ' ₸'
}