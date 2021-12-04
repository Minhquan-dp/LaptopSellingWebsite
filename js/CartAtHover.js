// Thêm vào giỏ
var add_cart = document.getElementById('them-vao-gio')
// for (var i = 0; i < add_cart.length; i++) {
//     var add = add_cart[i];
var numProduct = 0;
add_cart.addEventListener('click', function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement.parentElement.parentElement;
    var img = product.querySelector('.product-image').style.backgroundImage.slice(4, -1).replace(/"/g, "")
    var title = product.querySelector('.title-pro').innerHTML
    var price = product.querySelector('.price-product').innerHTML
    numProduct++;
    addItemToCart(img, title, price, numProduct)
    // // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    // modal.style.display = "block";
    //
    updatecart()
})
// }

// update cart
function updatecart() {
    let priceCartItems = document.querySelectorAll('.cart-item')
    let totalPriceCartItems = 0;
    let totalProductCart = 0;
    let totalPrice = document.querySelector('.total-price');
    let totalProduct = document.querySelector('.total-product');
    let regex = /\d+/g;

    for (let i = 0; i < priceCartItems.length; i++) {
        totalPriceCartItems = parseFloat(priceCartItems[i].querySelector('.price-cart-item').innerHTML)
        totalProductCart = parseInt(priceCartItems[i].querySelector('.num-cart-item').innerHTML.match(regex))
        totalPriceCartItems = totalProductCart * totalPriceCartItems;
    }
    totalPriceCartItems = totalPriceCartItems.toLocaleString('it-IT', {style: 'currency', currency: 'VND'})
    totalPrice.innerHTML = totalPriceCartItems;

    totalProduct.innerHTML = "Tổng tiền " + totalProductCart + " sản phẩm"
}


function addItemToCart(img, title, price, numProduct) {
    var cartRow = document.createElement('div')
    let count = 0;
    var cartItems = document.querySelector('.cover-cart-item')
    var cart_items = cartItems.querySelectorAll('.cart-item')
    if (numProduct >= 2) {
        for (let i = 0; i < cart_items.length; i++) {
            if (cart_items[i].getElementsByClassName('infor-cart-item')[0].innerHTML == title) {
                cart_items[i].getElementsByClassName('num-cart-item')[0].innerHTML = "Số lượng: " + numProduct;
                count++
            } else {
                count = 0;
                numProduct = 0;
            }
        }
    }
    if (count <= 0) {
        var itemProduct = `<div class="cart-item">
            <div class="img-cart-item" style="background-image: url(${img})">

            </div>
            <div class="details-cart-item">
                <div class="infor-cart-item">${title}</div>
                <div class="num-cart-item">Số lượng: ${numProduct}</div>
                <div class="price-cart-item">${price}</div>
            </div>
        </div>`
        cartRow.innerHTML = itemProduct
        cartItems.append(cartRow)
    }
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
//         var button_remove = event.target
//         button_remove.parentElement.parentElement.remove()
//         updatecart()
//     })
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
//         var input = event.target
//         if (isNaN(input.value) || input.value <= 0) {
//             input.value = 1;
//         }
//
//         ()
//     })
}


