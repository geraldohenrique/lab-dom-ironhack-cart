// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').textContent);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subTotal = price * quantity;
  product.querySelector ('.subtotal span').innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  let total = 0;
  const singleProduct = document.querySelectorAll('.product');
  if (!singleProduct.length){
    total = 0;
    document.querySelector('#total-value span').innerHTML = total;
  }
  singleProduct.forEach((elem) => {
    total = total + updateSubtotal(elem);
    document.querySelector('#total-value span').innerHTML = total;
  });
}

function removeProduct(event) {
  const target = event.currentTarget.closest('.product');
  const parent = target.parentNode;
  parent.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  calculatePricesBtn.addEventListener('click', calculateAll);
  removeProductBtn.forEach((elem) =>{
    elem.addEventListener('click', removeProduct)
  });
    //... your code goes here
});
