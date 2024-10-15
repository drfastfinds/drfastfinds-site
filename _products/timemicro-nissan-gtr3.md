---
layout: product
title: "TimeMicro Nissan GTR3.0 Light Blue 1/64"
price: 45.00
youtube_link: "https://youtube.com/shorts/36I22GR1Jx8?feature=share"
youtube_video_id: "36I22GR1Jx8"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/Light%20blue/nissan/timemicro/2024/09/25/time-micro-nissan-gtr3-Light-blue.html"
description: |
  <p>The TimeMicro Nissan GTR3.0 in Light Blue is a remarkable addition for diecast collectors and automotive enthusiasts. This 1/64 scale model showcases the stunning design and vibrant color that captures the essence of the iconic Nissan GTR.</p>

  <p>With excellent detailing and craftsmanship, this model not only serves as a great display piece but also embodies the spirit of performance and luxury that the GTR brand represents. It's perfect for both display and play, making it a must-have for any car lover's collection.</p>

  <p><strong>Brand:</strong> TimeMicro</p>
  <p><strong>Model:</strong> Nissan GTR3.0</p>
  <p><strong>Scale:</strong> 1/64</p>
  <p><strong>Category:</strong> Model Car</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmlb.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmlb-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmlb-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmlb-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmlb-4.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmlb.jpg"
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
    <p>Read more about the TimeMicro Normal Alloy Model: Nissan GTR3.0 Light Blue on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/Light%20blue/nissan/timemicro/2024/09/25/time-micro-nissan-gtr3-Light-blue.html">The TimeMicro Nissan GTR3: A Light Blue Icon</a>
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
