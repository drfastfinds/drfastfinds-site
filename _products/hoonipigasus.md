---
layout: product
title: "Hoonipigasus: Ken Block's Porsche Racing Legend"
price: 50.00
youtube_link: "https://youtu.be/n8B37CEhEwQ"
description: |
  <p>The Hoonipigasus is an iconic model that pays tribute to Ken Block's incredible legacy in motorsports. Known for its stunning design and powerful performance, this model captures the essence of the legendary Porsche Hoonipigasus. A perfect addition for any car enthusiast or model collector.</p>

  <p>With remarkable attention to detail, this model showcases the artistic livery inspired by the historic 1971 Porsche 917/20 “Pink Pig.” Experience the spirit of racing with this high-quality representation of the Hoonipigasus.</p>
  
  <p>Approximate dimensions: 1/43 scale.</p>
  
image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/hpig-4.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hpig-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hpig-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hpig-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hpig-4.jpg"
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
    <p class="youtube-link">For an overview, check out the product video here:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/n8B37CEhEwQ" frameborder="0" allowfullscreen></iframe>
    <p class="youtube-link">For a closer look, watch Aulgarage's review below:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/y_HPB8HF540" frameborder="0" allowfullscreen></iframe>
    <p>Read more about the Hoonipigasus on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/2024/09/10/hoonipigasus-legendary-porsche.html" target="_blank">Hoonipigasus: A Legendary Porsche, Racing to the Clouds</a>
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
