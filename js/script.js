var cardsData = [{
    id: 1,
    imgUrl: './images/CartScreen/first-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 11.99,
    amount: 10
  },
  {
    id: 2,
    imgUrl: './images/CartScreen/second-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 8.00,
    amount: 2
  },
  {
    id: 3,
    imgUrl: './images/CartScreen/third-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 11.99,
    amount: 2
  },
  {
    id: 4,
    imgUrl: './images/CartScreen/fourth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 10.00,
    amount: 3
  },
  {
    id: 5,
    imgUrl: './images/CartScreen/fifth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 10.00,
    amount: 5
  },
  {
    id: 6,
    imgUrl: './images/CartScreen/fifth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 10.00,
    amount: 4
  }, {
    id: 7,
    imgUrl: './images/CartScreen/fifth-img.svg',
    textTop: 'Golden fruit jam',
    textBottom: 'Quantity 01 Bottle',
    price: 10.00,
    amount: 9
  }
]

function createCard(product) {
  var rectangle = document.createElement('div');
  rectangle.innerHTML = `
    <div class='rectangle'>
      <span class='repeated-img' style="background-image:url(${product.imgUrl}"></span>
      <span class='repeated-text'>
        <span class='text-top'>${product.textTop}</span>
        <span class='text-bottom'>${product.textBottom}</span>
      </span>
      <input class='quantity' placeholder=1 value='${product.amount}' type='number' ></input>
      <span class='quantity-price'>$${(product.price * product.amount).toFixed(2)}</span>
      <button class='cross' data-id=${product.id}></button>
    </div>
  `
  return rectangle;
}

function renderList() {
  var scroll = document.querySelector('.scroll');
  scroll.innerHTML = '';

  cardsData.forEach(element => {
    var cardItem = createCard(element);
    scroll.appendChild(cardItem);
  })

  const deleteButtons = document.querySelectorAll('.cross');
  deleteButtons.forEach(button => {
    button.onclick = deleteItem;
  });

  sumPrice();

  quantityCards();
}

function deleteItem(e) {
  const id = e.target.getAttribute('data-id');
  cardsData = cardsData.filter(i => Number(id) !== i.id);
  renderList();
}

function sumPrice() {
  var totalPriceElement = document.querySelector('.total-price');
  const sumValue = cardsData.reduce((total, person) => {
    return total + (person.price * person.amount);
  }, 0);
  totalPriceElement.innerHTML = `$${sumValue.toFixed(2)}`;
}

function quantityCards() {
  var quantityItemAdded = document.querySelector('.upper-item-added');
  var quantityElements = document.querySelector('.scroll').children.length;
  quantityItemAdded.innerHTML = `${quantityElements} Item added`;
}

renderList();