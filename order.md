---
layout: default
title: Order Page
---

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
    label {
        font-weight: bold;
        margin-bottom: 5px;
    }
    input, select, textarea, button {
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }
    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #45a049;
    }
    h3 {
        margin-top: 20px;
        border-bottom: 2px solid #ddd;
        padding-bottom: 10px;
    }

.thank-you-message {
    text-align: center;
    margin-top: 20px; /* Adjust margin as needed */
    font-size: 16px; /* Adjust font size as needed */
}

</style>



<h2>Order Form</h2>

<form id="order-form" action="https://formspree.io/f/mvgpyred" method="post">
    <label for="product">Select Product:</label>
    <select id="product" name="product">
         <option value="bugatti-divo" data-price="110.00">Bburago Bugatti Divo - Blue 1/18 Scale Model - $110.00</option>
<option value="porsche-963" data-price="40.00">Bburago Porsche 963 LMDH #5 Lemans 1/24 Scale - $40.00</option>
        <!-- Add more products as needed -->
    </select>

    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" value="1" min="1" max="10">

    <button type="button" onclick="addItem()">Add to Order</button>

    <h3>Order Summary</h3>
    <ul id="order-summary"></ul>
    <p id="total">Total: $0.00 </p>

    <hr>

    <div class="shipping-info">
        <p>* Shipping will be calculated separately.</p>

    </div>

    <h3>Contact Information</h3>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="street">Street:</label>
    <input type="text" id="street" name="street" required>

    <label for="state">State:</label>
    <input type="text" id="state" name="state" required>

    <label for="country">Country:</label>
    <input type="text" id="country" name="country" required>

    <label for="postal">Postal Code:</label>
    <input type="text" id="postal" name="postal" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>

    <!-- Hidden field to pass the order summary -->
    <input type="hidden" id="order-summary-field" name="order-summary">

    <button type="submit">Submit Order</button>
</form>


<script>
    let total = 0;
    const summaryList = document.getElementById('order-summary');
    const totalDisplay = document.getElementById('total');
    const items = {};

    function addItem() {
        const productSelect = document.getElementById('product');
        const quantityInput = document.getElementById('quantity');
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const productName = selectedOption.text;
        const productPrice = parseFloat(selectedOption.getAttribute('data-price'));
        const quantity = parseInt(quantityInput.value);
        const itemTotal = productPrice * quantity;

        if (items[productName]) {
            items[productName].quantity += quantity;
            items[productName].total += itemTotal;
        } else {
            items[productName] = { quantity: quantity, total: itemTotal, price: productPrice };
        }

        updateSummary();
    }

    function updateSummary() {
        summaryList.innerHTML = '';
        total = 0;

        for (const [name, item] of Object.entries(items)) {
            const itemList = document.createElement('li');
            itemList.textContent = `${name} - $${item.total.toFixed(2)} (${item.quantity}x)`;
            summaryList.appendChild(itemList);
            total += item.total;
        }

        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }

    document.getElementById('order-form').addEventListener('submit', function(event) {
        const requiredFields = ['email', 'street', 'state', 'country', 'postal'];
        for (let field of requiredFields) {
            if (!document.getElementById(field).value) {
                alert('Please complete all required fields.');
                event.preventDefault();
                return;
            }
        }

        // Prepare order summary
        const orderSummary = Object.entries(items).map(([name, item]) => `${name}: $${item.total.toFixed(2)} (${item.quantity}x)`).join('\n');
        const orderTotal = `Total: $${total.toFixed(2)}`;
        
        // Create a hidden field to store the order summary
        const hiddenSummaryField = document.createElement('input');
        hiddenSummaryField.type = 'hidden';
        hiddenSummaryField.name = 'order_summary';
        hiddenSummaryField.value = `${orderSummary}\n${orderTotal}`;
        document.getElementById('order-form').appendChild(hiddenSummaryField);

        // Clean up and ensure only necessary fields are submitted
        document.getElementById('product').remove();
        document.getElementById('quantity').remove();
    });
</script>

<div class="thank-you-message">
    <p>An email with a PayPal link for the shipment will be sent shortly after submission.</p>
    <p>You can contact <a href="mailto:drfastfinds@gmail.com">drfastfinds@gmail.com</a> with questions and concerns regarding your order.</p>
</div>