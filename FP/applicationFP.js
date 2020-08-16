const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: []
}

console.log(purchaseItem(user, {name: "laptop", price: 344}));

function purchaseItem (user, item) {
  return Object.assign({}, user, {purchases: item})
}

function addItemToCart () {

}

function applyTaxToItems () {

}

function buyItem () {

}

function emptyCart () {

}