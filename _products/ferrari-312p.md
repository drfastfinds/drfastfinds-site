---
layout: product
title: "Bburago Ferrari 312P 1/43 Scale Model"
price: 35.00
image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/312.jpg"  # Main product image
youtube_link: "https://www.youtube.com/embed/m6nGbcmZFgM"  # Embed link for AC Collection video
youtube_video_id: "m6nGbcmZFgM"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/ferrari/bburago/312p/2024/09/25/bburago-ferrari-312p.html"
description: "<p>The Bburago Ferrari 312P diecast model is a tribute to one of Ferrari’s iconic racing cars from the late 1960s. This 1/43 scale model showcases the sleek design and powerful V12 engine of the original 312P, which made its debut at the 1969 12 Hours of Sebring.</p>
<p>The model captures fine details of the Ferrari 312P’s body and interior, making it a must-have for any Ferrari enthusiast.</p>
<p>Approximate dimensions: 1/43 scale.</p>
<p><strong>Product Details and Features:</strong></p>
<ul>
<li><strong>Brand:</strong> Bburago</li>
<li><strong>Scale:</strong> 1/43</li>
<li><strong>Model:</strong> Ferrari 312P</li>
<li><strong>Color:</strong> Red</li>
<li><strong>Material:</strong> Diecast metal with plastic components</li>
<li><strong>Packaging:</strong> Display box with Ferrari branding</li>
</ul>"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-3.jpg"  # Thumbnail image 3
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312.jpg"  # Thumbnail image 4
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

<div class="video-container" style="text-align: center; margin-top: 20px;">
    <h3>Watch the AC Collection Video</h3>
    <iframe width='560' height='315' src='{{ page.youtube_link }}' frameborder='0' allowfullscreen></iframe>
</div>

<div style="text-align: center; margin-top: 20px;">
<p>Read more about the Bburago Ferrari 312P on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/ferrari/bburago/312p/2024/09/25/bburago-ferrari-312p.html">The Bburago Ferrari 312P: A Collector's Dream</a>
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

.video-container {
    margin-top: 20px;
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
