---
layout: product
title: "TimeMicro Tiffany Blue Trailer Set: Volkswagen and Spyder"
price: 70.00
youtube_link: "https://youtube.com/shorts/fXCzU8YOLZI?feature=share"
description: |
  <p>The TimeMicro Tiffany Blue Trailer Set featuring Volkswagen and Spyder is a stunning addition for collectors and enthusiasts alike. This set combines vibrant aesthetics with exquisite detailing, showcasing the iconic Volkswagen alongside the stylish Spyder.</p>

  <p>Perfect for display or play, this model captures the spirit of adventure and the joy of classic automotive design. Whether you're a fan of diecast models or simply appreciate fine craftsmanship, this trailer set is a must-have for any collection.</p>

  <p>Approximate dimensions: 1/64 scale.</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tftra.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tftra-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tftra-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tftra-3.jpg"
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
    <p>Read more about the TimeMicro Tiffany Blue Trailer Set on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/tiffany%20blue/timemicro/2024/09/25/time-micro-tiffany-blue-trailer-set-volkswagen-spyder.htmlr">The TimeMicro Tiffany Blue Trailer Set: Volkswagen and Spyder</a>
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
