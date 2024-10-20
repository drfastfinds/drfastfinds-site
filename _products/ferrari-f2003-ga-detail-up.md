---
layout: product
title: "Ferrari F2003-GA 1/20 Super Detail-Up Set by Top Studio"
price: 185.00
youtube_link: ""
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/top%20studio/ferrari/f2003-ga/2024/09/25/ferrari-f2003-ga-super-detail-up-set.html"
description: |
  <p>The Ferrari F2003-GA Super Detail-Up Set by Top Studio is the ultimate enhancement for enthusiasts looking to elevate their Ferrari F2003-GA model to the next level. This premium detail-up set features high-quality components that add realism and precision to your model, ensuring a standout display piece.</p>

  <p>Designed specifically for the Ferrari F2003-GA, this set includes meticulously crafted parts that reflect the intricate details of the original racing car. Perfect for both collectors and hobbyists, this detail-up set will enhance your building experience and the overall appearance of your model.</p>

  <p>Compatible with 1/20 scale Ferrari F2003-GA models.</p>

  <p><strong>Item Number:</strong> MD29013</p>

  <p>You can see our short product video <a href="https://youtube.com/shorts/SlHZOCqdltk?feature=share" target="_blank">here</a>.</p>


image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsfr.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsfr-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsfr-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsfr-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tsfr-4.jpg"
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
    <p>Read more about the Ferrari F2003-GA Super Detail-Up Set on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/top%20studio/ferrari/f2003-ga/2024/09/25/ferrari-f2003-ga-super-detail-up-set.html" target="_blank">Ferrari F2003-GA Super Detail-Up Set by Top Studio</a>
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
