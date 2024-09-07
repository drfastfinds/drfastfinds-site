---
layout: product
title: Bburago Bugatti Divo - Blue 1/18 Scale Model
price: 110.00
youtube_link: "https://youtu.be/6L2bebS8YVg"
description: |
  The Bugatti Divo is a standout in the world of model cars due to its exclusivity and high-performance design. Limited to just 40 real-life units, owning a scale model of the Divo brings a piece of Bugatti’s elite engineering into your collection. With its striking aerodynamic features, including the massive fixed rear wing and advanced cooling systems, the Divo model beautifully captures the essence of a track-focused hypercar. For model car enthusiasts, the Divo represents the perfect combination of luxury, speed, and rarity, making it a must-have for any serious collection.

  New in box. This model features real rubber tires and steerable wheels for an authentic feel. Both the interior and exterior are meticulously detailed, including a functional frunk (front trunk) and doors that open. Made primarily of diecast metal with some plastic components.

  Approximate dimensions: L-9.75", W-4.75", H-2.5".

  Care Instructions: Wipe clean.
image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/divo.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/divo-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/divo-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/divo-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/divo-4.jpg"
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
    <p>Read more about the Bugatti Divo on our blog: 
        <a href="{{ site.baseurl }}/2024/09/06/my-first-post.html">The Bugatti Divo: A Symphony of Speed and Performance</a>
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
