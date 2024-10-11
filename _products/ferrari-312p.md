---
layout: product
title: "Bburago Ferrari 312P"
price: 39.99
description: |
  <p>The Bburago Ferrari 312P is a stunning diecast model that pays homage to one of the most iconic race cars in automotive history. This model beautifully captures the essence of the Ferrari 312P, known for its exceptional performance and rich racing heritage.</p>

  <p>With meticulous attention to detail and high-quality craftsmanship, this diecast model is a perfect addition to any collection and a true tribute to the spirit of racing.</p>

  <p>Approximate dimensions: 1/43 scale.</p>
  
product_details: |
  <ul>
    <li><strong>Brand:</strong> Bburago</li>
    <li><strong>Scale:</strong> 1/43</li>
    <li><strong>Model:</strong> Ferrari 312P</li>
    <li><strong>Color:</strong> Red</li>
    <li><strong>Material:</strong> Diecast metal with plastic components</li>
    <li><strong>Packaging:</strong> Display box with Ferrari branding</li>
  </ul>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/ferrari-312p.jpg"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        {{ page.product_details | markdownify }}
        <p>Price: ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>
    </div>
</div>

<div style="text-align: center;">
    <p>Read more about the Bburago Ferrari 312P on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/bburago/ferrari/312p/2024/09/25/bburago-ferrari-312p.html" target="_blank">Bburago Ferrari 312P</a>
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
