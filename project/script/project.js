const products = [
{ id: 1, name: `Ankara Gown`, category: `women`, price: 15000, image: `https://picsum.photos/seed/gown/300/300` },
{ id: 2, name: `Agbada Classic`, category: `men`, price: 25000, image: `https://picsum.photos/seed/agbada/300/300` },
{ id: 3, name: `Adire Shirt`, category: `men`, price: 8000, image: `https://picsum.photos/seed/shirt/300/300` },
{ id: 4, name: `Lace Blouse`, category: `women`, price: 12000, image: `https://picsum.photos/seed/lace/300/300` },
{ id: 5, name: `Senator Wear`, category: `men`, price: 18000, image: `https://picsum.photos/seed/senator/300/300` },
{ id: 6, name: `Iro and Buba`, category: `women`, price: 20000, image: `https://picsum.photos/seed/iro/300/300` }
];

function displayProducts(list, containerId) {
const container = document.querySelector(`#${containerId}`);
if (!container) return;
container.innerHTML = ``;
list.forEach(product => {
const card = document.createElement(`div`);
card.classList.add(`card`);
card.innerHTML = `
<img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300">
<h3>${product.name}</h3>
<p>Category: ${product.category}</p>
<p>Price: ₦${product.price}</p>
<button data-id="${product.id}">Add to Favorites</button>
`;
container.appendChild(card);
});
attachFavoriteListeners();
updateFavCount();
}

function filterProducts(category) {
if (category === `all`) {
return products;
} else {
return products.filter(p => p.category === category);
}
}

function saveFavorite(id) {
let favs = JSON.parse(localStorage.getItem(`favorites`)) || [];
if (!favs.includes(id)) {
favs.push(id);
localStorage.setItem(`favorites`, JSON.stringify(favs));
}
if (favs.length > 3) {
alert(`You have ${favs.length} favorites! You love fashion!`);
} else {
alert(`Added to favorites!`);
}
}

function attachFavoriteListeners() {
const buttons = document.querySelectorAll(`button[data-id]`);
buttons.forEach(btn => {
btn.addEventListener(`click`, () => {
const id = parseInt(btn.getAttribute(`data-id`));
saveFavorite(id);
updateFavCount();
});
});
}

function updateFavCount() {
const favs = JSON.parse(localStorage.getItem(`favorites`)) || [];
const countEl = document.querySelector(`#favCount`);
if (countEl) {
countEl.textContent = `${favs.length}`;
}
}

function handleForm() {
const form = document.querySelector(`#contactForm`);
const msgDiv = document.querySelector(`#formMessage`);
if (!form) return;
form.addEventListener(`submit`, (e) => {
e.preventDefault();
const name = document.querySelector(`#fullname`).value;
localStorage.setItem(`lastContact`, name);
msgDiv.textContent = `Thank you ${name}, we received your message!`;
form.reset();
});
}

displayProducts(products, `productContainer`);
displayProducts(products, `shopContainer`);

const allBtn = document.querySelector(`#allBtn`);
const menBtn = document.querySelector(`#menBtn`);
const womenBtn = document.querySelector(`#womenBtn`);

if (allBtn) {
allBtn.addEventListener(`click`, () => {
const filtered = filterProducts(`all`);
displayProducts(filtered, `productContainer`);
});
}
if (menBtn) {
menBtn.addEventListener(`click`, () => {
const filtered = filterProducts(`men`);
displayProducts(filtered, `productContainer`);
});
}
if (womenBtn) {
womenBtn.addEventListener(`click`, () => {
const filtered = filterProducts(`women`);
displayProducts(filtered, `productContainer`);
});
}

handleForm();
updateFavCount();