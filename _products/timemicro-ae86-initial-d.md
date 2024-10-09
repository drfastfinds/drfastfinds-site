---
layout: product
title: TimeMicro AE86 Initial D Anime Version 1/64 Scale Model
price: 45.00
youtube_link: "https://youtube.com/shorts/mNlnAmBNDQ8?feature=share"  # Add a YouTube link if you have one
description: |
  <p>The TimeMicro AE86 Initial D Anime Version is a fantastic model for fans of the legendary anime and car culture. This 1/64 scale model beautifully captures the essence of the iconic Toyota AE86, known for its role in Initial D and its reputation as a lightweight, agile performance vehicle.</p>

  <p>Perfectly detailed and crafted, this model is a must-have for collectors and enthusiasts alike. The vibrant design reflects the character's spirit and the thrill of street racing in the anime.</p>

  <p>Approximate dimensions: 1/64 scale.</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind-3.jpg"
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
    <p>Read more about the TimeMicro AE86 Initial D on our blog: 
        <a href="{{ site.baseurl }}/products/timemicro-ae86-initial-d">The TimeMicro AE86 Initial D: A Collector's Dream</a>
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
