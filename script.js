function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// async function cartItemClickListener(event) {

// }

// function createCartItemElement({ sku, name, salePrice }) {
//   const li = document.createElement('li');
//   li.className = 'cart__item';
//   li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
//   li.addEventListener('click', cartItemClickListener);
//   return li;
// }

async function searchedProducts(product) {
  const searchData = await fetchProducts(product);
  const sectionItems = document.querySelector('.items');
  searchData.results.forEach((item) => {
    const itemObject = {
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    };
    const productItem = createProductItemElement(itemObject);
    sectionItems.appendChild(productItem);
  });
}

// async function addToCart() {
//   const cartItemsList = document.querySelector('.cart__items');
//   const addBttn = document.querySelector('.item__add').currentTarget;
//   const getItemId = addBttn.previousSibbling.previousSibbling.previousSibbling.innerText;
//   const itemInfos = await fetchItem(getItemId);
//   itemInfos.forEach((info) => {
//     const itemObject = {
//       sku: info.id,
//       name: info.title,
//       salePrice: info.price,
//     };
//     const cartItems = createCartItemElement(itemObject);
//     cartItemsList.appendChild(cartItems);
//   });
// }

// function buy() {
//   const addToCartBttn = document.querySelectorAll('item__add');
//   for(const index in addToCartBttn) {
//   addToCartBttn[index].addEventListener('click', addToCart);
//   }
// }

function cleanEntireCart() {
  const cartItems = document.querySelector('.cart__items');
  cartItems.innerHTML = '';
}

const cleanBttn = document.querySelector('.empty-cart');

cleanBttn.addEventListener('click', cleanEntireCart);

window.onload = () => { 
  searchedProducts('computador');
  buy();
  cleanEntireCart();
};
