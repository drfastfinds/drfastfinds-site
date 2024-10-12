---
layout: product
title: "Inter Allied Toyota 2000 GT"
price: 150.00
youtube_link: ""
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/inter%20allied/toyota/2000gt/2024/09/25/inter-allied-toyota-2000-gt.html"

description: |
  <p>The Inter Allied Toyota 2000 GT is a premium model kit representing one of Japan's most iconic sports cars. This beautifully crafted 1/24 scale model showcases the sleek and stylish design that made the Toyota 2000 GT a legend in the automotive world. With exceptional detailing and craftsmanship, this kit is a must-have for car enthusiasts and collectors alike.</p>

  <p>Whether you're building for display or play, this model offers a rewarding experience with its intricate parts and faithful representation of the original vehicle. Add this rare gem to your collection and celebrate the legacy of Japanese engineering excellence.</p>

  <p><strong>Brand:</strong> Inter Allied</p>
  <p><strong>Model:</strong> Toyota 2000GT (Speed Record Car)</p>
  <p><strong>Scale:</strong> 1/24</p>
  <p><strong>Material:</strong> Resin</p>
  <p><strong>Series:</strong> Modeler's</p>
  <p><strong>Category:</strong> Model Car Kit</p>
  <p><strong>Item Number:</strong> QM2402K</p>

  <h3>Guide: Toyota 2000 GT World Speed Record</h3>
  <p>After encouraging results with the 2000 GT-based 311 S at the 1966 Japanese Grand Prix and Suzuka 1000km, Toyota decided to attempt a series of high speed endurance records. The location chosen was Yatabe, where the Japanese Automobile Research Institute had opened a proving ground.</p>
  <p>Over three days in early October, Toyota aimed to set records from 1000 to 5000 miles, 6 to 72 hours, and 2000 to 15,000 kilometers. The car used was an aluminum-bodied pre-production prototype, specially prepared for the event.</p>
  <p>After modifications, including engine enhancements and aerodynamic adjustments, the record attempt was made with a team of five drivers sustaining an average speed of over 200 km/h for three days, resulting in 13 new international records.</p>
  <p>Unfortunately, the record car was later destroyed in a pace car accident, but a replica exists in the factory collection.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-4.png"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-1.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-2.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-3.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/2000gt-4.png"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p>Price: ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>
        <p class="youtube-link">For more details, check out the product video here: 
            <a href="{{ page.youtube_link }}" target="_blank">Watch on YouTube</a>
        </p>
        <p>Read more about the Inter Allied Toyota 2000 GT on our blog: 
            <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/inter%20allied/toyota/2000gt/2024/09/25/inter-allied-toyota-2000-gt.html" target="_blank">Inter Allied Toyota 2000 GT</a>
        </p>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
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
