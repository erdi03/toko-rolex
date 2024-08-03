const cart = [];

function addToCart(productId) {
    const productElement = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = productElement.querySelector('h3').innerText;
    const productPrice = productElement.querySelector('p').innerText;

    cart.push({ id: productId, name: productName, price: productPrice });
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Thank you for your purchase!');
    cart.length = 0; // Empty the cart
    updateCart();
}
