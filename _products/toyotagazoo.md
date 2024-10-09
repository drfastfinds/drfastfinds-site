---
layout: product
title: Tamiya Toyota Gazoo Racing TS050 Hybrid 1/24 Scale
price: 100.00
youtube_link: "https://youtube.com/shorts/qtSTcmoXqks?feature=share"  # Add a YouTube link if you have one
description: |
  <p>The Tamiya Toyota Gazoo Racing TS050 Hybrid is a must-have model for motorsport enthusiasts and collectors alike. Limited to 3 per household, this high-quality kit accurately reproduces the body form of the actual TS050, focusing on aerodynamics and incorporating various aero devices, just like the real vehicle.</p>

  <p>This model features a plated cockpit roof, detailed door mirrors, and front LED lights represented by inlet marks. The kit includes decals for the 7th and 8th cars, along with masking stickers for different colors.</p>

  <p>Approximate dimensions: Total length = 194 mm.</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz-3.jpg"
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

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
</div>

<div style="text-align: center;">
    <p class="youtube-link">For more details, check out the product video here: 
        <a href="{{ page.youtube_link }}" target="_blank">Watch on YouTube</a>
    </p>
    <p>Read more about the Tamiya Toyota Gazoo Racing TS050 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/toyota%20gazoo%20racing/ts050%20hybrid/2024/09/25/toyota-gazoo-ts050.html">The Tamiya Toyota Gazoo Racing TS050 Hybrid: A Collector's Model</a>
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

.thumbnail-carousel {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap; 
    gap: 10px;
    justify-content: flex-start;
}

.thumbnail {
    max-width: 80px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 4px;
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

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            mainImage.src = this.src;
        });
    });
});
</script>
