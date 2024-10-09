---
layout: product
title: "Studio27 BMW F1.06 Sauber 1/24 Scale"
price: 385.00
youtube_link: ""  # Add a YouTube link if you have one
description: |
  <p>The Studio27 BMW F1.06 Sauber is a premium 1/24 scale model kit, offering a highly detailed and accurate representation of the BMW Sauber F1 car. This kit is perfect for advanced model builders looking to replicate the famous F1.06 from BMW's 2006 Formula 1 season.</p>

  <p>With intricate parts and a focus on precision, this model captures the spirit of BMW's engineering excellence. It's a fantastic addition to any Formula 1 enthusiast's collection, showcasing a pivotal moment in Sauber's racing history.</p>

  <p>Approximate dimensions: 1/24 scale.</p>

  <p>Care Instructions: Handle with care during assembly, and follow the detailed instructions included for best results.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/bms.jpg"
thumbnails: []
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p>Price: ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>
    </div>
</div>

<div style="text-align: center;">
    <p class="youtube-link">For more details, check out the product video here: 
        <a href="{{ page.youtube_link }}" target="_blank">Watch on YouTube</a>
    </p>
    <p>Read more about the Studio27 BMW F1.06 Sauber on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/studio27/bmw/f1/2024/09/25/studio27-bmw-f1-06-sauber.html">Studio27 BMW F1.06 Sauber</a>
    </p>
</div>

<style>
.product-detail {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
}

.product-image-box {
    flex-shrink: 0;
    width: 500px; 
    height: 300px; 
    overflow: hidden; 
}

.main-image {
    width: 100%; 
    height: 100%; 
    object-fit: contain; 
    display: block;
}

.product-text {
    max-width: 400px;
    flex-grow: 1;
}

.youtube-link {
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
}

.buy-now {
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

.buy-now:hover {
    background-color: #0056b3;
}
</style>
