export default function createItemThumb({
  id,
  i,
  n,
  p
}) {
  
  const div = document.createElement('div');
  div.className = 'popup__product-container';
  div.innerHTML = `
    <div class="popup__product">
    <img src="${i}"
        alt="${n}" class="popup__product-img">
    <div class="popup__product-info">
        <p class="popup__product-price">${parseInt(p).toLocaleString() + ' ₸'}</p>
        <p class="popup__product-name">${n}</p>
    </div>
  </div>
  <div class="popup__count">
    <img src="https://www.technodom.kz/under/miele/plus.svg" alt="">
    <p class="popup__count-number">1</p>
    <img src="https://www.technodom.kz/under/miele/minus.svg" alt="">
  </div>
  `
  return div;
}