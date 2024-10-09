---
layout: product
title: "Tamiya 1/12 McLaren MP4 1/12 Scale"
price: 620.00
youtube_link: ""  # Add a YouTube link if you have one
description: |
  <p>The Tamiya 1/12 McLaren MP4 model kit is a stunning representation of the legendary McLaren Formula 1 car. This highly detailed model is perfect for serious model builders and F1 fans alike, offering a 1/12 scale build that captures the technical brilliance and racing spirit of the iconic MP4.</p>

  <p>This premium kit includes fine details, from the engine components to the aerodynamic features, providing a realistic and challenging build for experienced modelers.</p>

  <p>Approximate dimensions: 1/12 scale.</p>

  <p>Care Instructions: Handle with care during assembly.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-4.jpg"
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
    <p>Read more about the Tamiya 1/12 McLaren MP4 1/12 Scale on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/mclaren/mp4/2024/09/25/tamiya-mclaren-mp4.html">Tamiya McLaren MP4</a>
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
