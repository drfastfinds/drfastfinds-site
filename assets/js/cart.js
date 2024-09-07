// assets/js/cart.js

// Initialize cart if not already present
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify({ count: 0, total: 0 }));
}

// Function to fetch product details
function getProductDetails(productId) {
    const products = {
        'bugatti-divo': { name: 'Bburago Bugatti Divo - Blue 1/18 Scale Model', price: 110.00 },
        // Add other products here if needed
    };
    return products[productId] || { name: 'Unknown', price: 0.00 };
}

// Update cart count and total
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || { count: 0, total: 0 };
    const cartCount = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cartCount) {
        cartCount.textContent = `(${cart.count})`;
    }
    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: $${cart.total.toFixed(2)}`;
    }
}

// Add item to cart
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || { count: 0, total: 0 };
    const product = getProductDetails(productId);

    if (productId && product.price) {
        cart.count += 1;
        cart.total += product.price;

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    } else {
        console.error('Invalid product ID or price');
    }
}

// Event listener for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const productId = this.getAttribute('data-product');
            addToCart(productId);
        });
    });

    // Initial update for cart count and total
    updateCart();
});
