---
layout: product
title: "Top Studio 1/20 RB6 Super Detail-Up Set"
price: 150.00
youtube_link: ""  # Add a YouTube link if you have one
description: |
  <p>The Top Studio 1/20 RB6 Super Detail-Up Set is a must-have for model builders looking to enhance the realism of their Red Bull Racing RB6 model kit. This detail-up set offers high-quality parts and detailed components that add a new level of accuracy and complexity to your build.</p>

  <p>With intricate photo-etched parts, wiring, and resin components, this set allows you to replicate the actual car with precision, making it perfect for dedicated modelers and F1 enthusiasts.</p>

  <p>Approximate dimensions: 1/20 scale.</p>

  <p>Care Instructions: Handle with care during assembly.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsrb.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsrb-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsrb-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsrb-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsrb-4.jpg"
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
    <p>Read more about the Top Studio 1/20 RB6 Super Detail-Up Set on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/top%20studio/red%20bull/rb6/2024/09/25/red-bull-rb6-super-detail-up-set.html">Red Bull RB6 Super Detail-Up Set</a>
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
