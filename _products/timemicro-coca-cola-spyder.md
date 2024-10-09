---
layout: product
title: "TimeMicro Coca Cola Spyder 918 Trailer Set 1/64 Scale Model"
price: 65.00
youtube_link: "https://youtube.com/shorts/34NZMo40ivs?feature=share"
description: |
  <p>The TimeMicro Coca Cola Spyder 918 Trailer Set is a delightful addition for collectors and fans of diecast models. This 1/64 scale model beautifully captures the iconic Coca Cola branding, showcasing the stylish Spyder alongside its trailer.</p>

  <p>With intricate detailing and vibrant colors, this set not only serves as a fantastic display piece but also embodies the spirit of fun and nostalgia associated with the Coca Cola brand.</p>

  <p>Approximate dimensions: 1/64 scale.</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmcola.png"
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
    <p>Read more about the TimeMicro Coca Cola Spyder 918 Trailer Set on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/coca%20cola/timemicro/2024/09/25/time-micro-coca-cola-spyder-918-trailer-set.html">The TimeMicro Coca Cola Spyder 918 Trailer Set</a>
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
