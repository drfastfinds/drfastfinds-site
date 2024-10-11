---
layout: product
title: TPC 1:64 RWB 993 1/64 Scale Model
price: 35.00
youtube_link: "https://youtube.com/shorts/vtYmvZLs2nM?feature=share"  # Add a YouTube link if you have one
description: |
  <p>The TPC 1:64 RWB 993 is a beautifully crafted scale model that represents the iconic Porsche 993. It also glows in the dark! Known for its wide body and striking design, this model captures the essence of RWB's customization philosophy. Perfect for collectors and enthusiasts, the RWB 993 model is a fantastic addition to any diecast collection. This model is a limited edition #815/999.</p>

  <p>New in box. This model features a detailed interior and exterior, showcasing the distinct styling that RWB is renowned for. Made primarily of diecast metal with some plastic components.</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tpc.jpg.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rwb-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rwb-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rwb-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rwb-4.jpg"
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
    <p>Read more about the TPC 1:64 RWB 993 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/rwb/tpc/porsche/2024/09/25/tpc-rwb-993.html">The TPC 1:64 RWB 993: A Collector's Gem</a>
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
