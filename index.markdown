---
layout: default
title: Dr. Fast Finds
---

<style>
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 20px;
}

.product {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    max-width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product img {
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}

.product p {
    margin: 10px 0;
}

.buy-now, .add-to-cart {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
}

.buy-now:hover, .add-to-cart:hover {
    background-color: #0056b3;
}
</style>


<div class="gallery">
    <div class="product">
        <a href="{{ site.baseurl }}/products/bugatti-divo">
            <img src="{{ site.baseurl }}/assets/images/divo.jpg" alt="Bburago Bugatti Divo - Blue 1/18 Scale Model">
            <p>Bburago Bugatti Divo - Blue 1/18 Scale Model</p>
            <p>Price: $110.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>

        </a>
    </div>

<div class="product">
        <a href="{{ site.baseurl }}/products/porsche-963">
            <img src="{{ site.baseurl }}/assets/images/963.jpg" alt="Bburago Porsche 963 LMDH #5 Le Mans 1/24 Scale">
            <p>Bburago Porsche 963 LMDH #5 Le Mans 1/24 Scale</p>
            <p>Price: $40.00</p>
            <a href="{{ site.baseurl }}/order/" class="order-now">Order Now</a>

        </a>
    </div>


</div>
