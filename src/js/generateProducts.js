const createArticle = (id, t) => {
    const article = document.createElement('article')
    article.classList.add('product-card')
    article.setAttribute('data-id', id)
    article.setAttribute('data-type', t)
    return article
}

const createImage = (i, n) => {
    const img = document.createElement('img');
    img.src = i;
    img.alt = n;
    img.classList.add('product-card__img')

    img.onerror = function () {
        img.src = 'https://www.technodom.kz/under/miele/product-card-thumbnaul.png'
    };

    return img
}

export default function generateProducts({
    id,
    i,
    n,
    p,
    t
}) {
    const article = createArticle(id, t)
    const image = createImage(i, n)
    const template = `
        <div class="product-card__info">
            <p class="product-card__name">${n}</p>
            <p class="product-card__price" data-price="${p ? parseInt(p) : ''}">${p ? parseInt(p).toLocaleString() + ' ₸' : 'Цена по запросу'}</p>
        </div>
        <button class="product-card__button">Заказать</button>
    `
    article.append(image)
    article.insertAdjacentHTML('beforeend', template)

    return article
}