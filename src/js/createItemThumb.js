export default function createItemThumb({
  id,
  i,
  n,
  p,
  count
}) {
  
  const div = document.createElement('div');
  div.className = 'popup__product-container';
  div.innerHTML = `
   <div class="popup__product-thumbs">
    <div class="popup__product">
      <img src="${i}"
          alt="${n}" class="popup__product-img">
      <div class="popup__product-info">
          <p class="popup__product-price">${parseInt(p, 10).toLocaleString() + ' ₸'}</p>
          <p class="popup__product-name">${n}</p>
      </div>
    </div>
    <div class="popup__count">
      <button type="button" class="popup__count-plus" data-id="${id}">
        <img src="https://www.technodom.kz/under/miele/plus.svg" alt="">
      </button>
      <p class="popup__count-number">${count}</p>
      <button type="button" class="popup__count-minus" data-id="${id}">
        <img src="https://www.technodom.kz/under/miele/minus.svg" alt="">
      </button>
    </div>
  </div>
  `
  return div;
}