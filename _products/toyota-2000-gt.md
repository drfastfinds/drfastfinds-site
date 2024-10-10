---
layout: product
title: "Inter Allied Toyota 2000 GT"
price: 150.00
youtube_link: ""
description: |
  <p>The Inter Allied Toyota 2000 GT is a premium model kit representing one of Japan's most iconic sports cars. This beautifully crafted 1/24 scale model showcases the sleek and stylish design that made the Toyota 2000 GT a legend in the automotive world. With exceptional detailing and craftsmanship, this kit is a must-have for car enthusiasts and collectors alike.</p>

  <p>Whether you're building for display or play, this model offers a rewarding experience with its intricate parts and faithful representation of the original vehicle. Add this rare gem to your collection and celebrate the legacy of Japanese engineering excellence.</p>

  <p>Approximate dimensions: 1/24 scale.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-4.png"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-1.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-2.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-3.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-4.png"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p>Price: ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>
        <p class="youtube-link">For more details, check out the product video here: 
            <a href="{{ page.youtube_link }}" target="_blank">Watch on YouTube</a>
        </p>
        <p>Read more about the Inter Allied Toyota 2000 GT on our blog: 
            <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/inter%20allied/toyota/2000gt/2024/09/25/inter-allied-toyota-2000-gt.html" target="_blank">Inter Allied Toyota 2000 GT</a>
        </p>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
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
