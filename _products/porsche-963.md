---
layout: product
title: Bburago Porsche 963 LMDH #5 Lemans 1/24 Scale
price: 40.00
youtube_link: "https://youtu.be/Y7SHeA4Hw98"
description: |
  <p>Size: 21.17 x 8.32 x 4.78 cm</p>
  <p>Material: Die-cast body, rubber tires, other parts made from eco-friendly ABS plastic. The wheels can turn, and some components are made from cast materials. The interior is highly detailed.</p>
  <p>Packaging: Color box packaging. We use thick, sturdy cardboard boxes and bubble wrap padding to ensure the product’s safety.</p>
  <p>Note: This is a static model, not a toy car, and is not suitable for children under 15 years old.</p>
  <p>For collectors: We wish you much joy in pursuing your collection dreams.</p>


image: https://drfastfinds.github.io/drfastfinds-site/assets/images/963.jpg
thumbnails:
  - https://drfastfinds.github.io/drfastfinds-site/assets/images/963-1.jpg
  - https://drfastfinds.github.io/drfastfinds-site/assets/images/963-2.jpg
  - https://drfastfinds.github.io/drfastfinds-site/assets/images/963-3.jpg
  - https://drfastfinds.github.io/drfastfinds-site/assets/images/963-4.jpg
  - sold_out: true
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p>Price: ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order/" class="buy-now">Order Now</a>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail">
    {% endfor %}
</div>

<p class="youtube-link">For more details, check out the product video here: 
  <a href="{{ page.youtube_link }}" target="_blank">Watch on YouTube</a>
</p>

<style>
.product-detail {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
}

.product-image-box {
    flex-shrink: 0;
    width: 500px; /* Set a fixed width for the image container */
    height: 300px; /* Set a fixed height for the image container */
    overflow: hidden; /* Hide overflow to ensure images don’t exceed the container */
}

.main-image {
    width: 100%; /* Ensure the image fills the container */
    height: 100%; /* Ensure the image fills the container */
    object-fit: contain; /* Scale the image to fit within the container without distortion */
    display: block;
}

.product-text {
    max-width: 400px;
    flex-grow: 1;
}

.thumbnail-carousel {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap; /* Allows thumbnails to wrap to the next line */
    gap: 10px; /* Space between thumbnails */
    justify-content: flex-start; /* Left justify thumbnails */
}

.thumbnail {
    max-width: 80px; /* Adjust as needed */
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
