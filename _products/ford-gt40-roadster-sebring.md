---
layout: product
title: "Exoto | 1:18 | Ford GT40 MK II Roadster 1966 | Winner, Sebring"
price: 30000.00
youtube_link: ""
description: |
  <p>The Exoto | 1:18 | Ford GT40 MK II Roadster 1966 is a stunning diecast model that celebrates the iconic Ford GT40, known for its legendary performance and triumph at the Sebring 12 Hours. This meticulously crafted model is a collector's dream, featuring exceptional detail and accuracy that captures the essence of the original race car.</p>

  <p>Whether displayed in a collection or as a standout piece in any automotive enthusiast's home, this model represents a significant piece of motorsport history. Don't miss the chance to own a piece of racing heritage.</p>

  <p>Approximate dimensions: 1/18 scale.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/fgt.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-4.jpg"
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
    <p>Read more about the Exoto | 1:18 | Ford GT40 MK II Roadster 1966 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast%20models/exoto/ford/gt40/2024/09/25/exoto-ford-gt40-mk-ii-roadster-1966.html" target="_blank">Exoto | 1:18 | Ford GT40 MK II Roadster 1966</a>
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
