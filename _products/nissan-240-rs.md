---
layout: product
title: "Beemax Nissan 240 RS"
price: 155.00
youtube_link: ""
description: |
  <p>The Beemax Nissan 240 RS is a highly detailed model kit that captures the essence of this iconic rally car. Known for its performance and success in motorsport, this model is a must-have for enthusiasts and collectors alike.</p>

  <p>With exceptional craftsmanship and attention to detail, this kit provides a rewarding building experience, allowing you to recreate one of Nissan's legendary vehicles.</p>

  <p>Approximate dimensions: 1/24 scale.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-4.jpg"
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
    <p>Read more about the Beemax Nissan 240 RS on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/beemax/nissan/240%20rs/2024/09/25/beemax-nissan-240-rs.html" target="_blank">Beemax Nissan 240 RS</a>
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
