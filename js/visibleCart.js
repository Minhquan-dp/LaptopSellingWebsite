let cart = document.querySelector('#header li a[href*="Cart.html"]')
let hoverCart = document.getElementById('cart-hover')
// cart.onmouseover = function () {
//     hoverCart.style.display = 'flex'
// }
// hoverCart.style.display = 'none'


$(function(){
    $(cart).hover(function(){
        $(hoverCart).css('display','flex');
    });
});

$(function(){
    $('#li-cart').hover(function(){
        $(hoverCart).css('display','flex');
    },function(){
        $(hoverCart).css('display','none');
    });
});

$(function(){
    $('#cart-hover').hover(function(){
        $(hoverCart).css('display','flex');
    },function(){
        $(hoverCart).css('display','none');
    });
});