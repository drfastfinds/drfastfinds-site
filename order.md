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
        <option value="porsche-963" data-price="40.00">Bburago Porsche 963 LMDH #5 Le Mans 1/24 Scale - $40.00</option>
        <option value="A110" data-price="155.00">Trofeu Alpine A110 1/43 Scale Model - $155.00</option>
        <option value="rwb" data-price="35.00">TPC 1:64 RWB 993 1/64 Scale Model - $35.00</option>
        <option value="ferrari-312p" data-price="50.00">Hoonipigasus: Ken Block's Porsche Racing Legend - $50.00/option>
        <option value="toyotagazoo" data-price="100.00">Tamiya Toyota Gazoo Racing TS050 Hybrid 1/24 Scale - $100.00</option>
        <option value="timemicro-ae86-initial-d" data-price="45.00">TimeMicro AE86 Initial D Anime Version 1/64 Scale Model - $45.00</option>
        <option value="timemicro-tiffany-blue-trailer" data-price="70.00">TimeMicro Tiffany Blue Trailer Set: Volkswagen and Spyder - $70.00</option>
        <option value="tiffany-blue-spyder" data-price="40.00">TimeMicro Tiffany Blue Spyder 1/64 Scale Model - $40.00</option>
        <option value="timemicro-nissan-gtr3" data-price="45.00">TimeMicro Normal Alloy Model: Nissan GTR3.0 Tiffany Blue, 1/64 - $45.00</option>
        <option value="timemicro-coca-cola-spyder" data-price="65.00">TimeMicro Coca Cola Spyder 918 Trailer Set 1/64 Scale Model - $65.00</option>
        <option value="tamiya-redbull-rb6" data-price="200.00">Tamiya 1/20 Red Bull Racing F1 Renault RB6 Grand Prix 1/20 Scale - $200.00</option>
        <option value="top-studio-rb6" data-price="180.00">Top Studio 1/20 RB6 Super Detail-Up Set - $180.00</option>
        <option value="tamiya-mclaren-mp4" data-price="620.00">Tamiya 1/12 McLaren MP4 1/12 Scale - $620.00</option>
        <option value="top-studio-mp4" data-price="800.00">Top Studio McLaren MP4/6 Super Detail-Up Set - $800.00</option>
        <option value="studio27-bmw-f106" data-price="385.00">Studio27 BMW F1.06 Sauber 1/24 Scale - $385.00</option>
        <option value="porsche-911-spa-francorchamps" data-price="190.00">Porsche 911 1969 Spa-Francorchamps 24th 1st - $190.00</option>
        <option value="mclaren-mp46-tabu-design" data-price="50.00">McLaren MP4/6 Full Sponsor (Tabu Design) - $50.00</option>
        <option value="lola-t292-1973" data-price="175.00">Lola T292 1973 SPA1000km 1/43 Scale - $175.00</option>
        <option value="lotus-super-7" data-price="65.00">Tamiya Lotus Super 7 Series II: A Classic Roadster - $65.00</option>
        <option value="toyota-2000-gt" data-price="150.00">Inter Allied Toyota 2000 GT - $150.00</option>
        <option value="toyota-88c-v" data-price="80.00">Hasegawa Minolta Toyota 88C-V: Iconic Racing Machine - $80.00</option>
        <option value="ferrari-f2003-ga-japan" data-price="170.00">Fujimi Ferrari F2003-GA Japan GP - $170.00</option>
        <option value="ferrari-f2003-ga-detail-up" data-price="185.00">Ferrari F2003-GA Super Detail-Up Set by Top Studio - $185.00</option>
        <option value="ford-gt40-roadster-sebring" data-price="30000.00">Exoto | 1:18 | Ford GT40 MK II Roadster 1966 | Winner, Sebring - $30,000.00</option>
        <option value="nissan-240-rs" data-price="155.00">Beemax Nissan 240 RS - $155.00</option>
        <option value="ferrari-312p" data-price="35.00">Bburago Ferrari 312P: A Diecast Tribute to Racing History - $35.00</option>
    </select>

    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" value="1" min="1" max="10">

    <button type="button" onclick="addItem()">Add to Order</button>

    <h3>Order Summary</h3>
    <ul id="order-summary"></ul>
    <p id="total">Total: $0.00</p>

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
    <p>An email with a PayPal link for the shipment will be sent shortly after submission. We only accept credit card.</p>
    <p>You can contact <a href="mailto:drfastfinds@gmail.com">drfastfinds@gmail.com</a> with questions and concerns regarding your order.</p>
</div>
