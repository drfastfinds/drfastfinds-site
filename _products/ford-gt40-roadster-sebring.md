---
layout: product
title: "Exoto | 1:18 | Ford GT40 MK II Roadster 1966 | Winner, Sebring"
price: 30000.00
youtube_link: "https://www.youtube.com/embed/WOSqMf2vvbs"
description: |
  <p>The Exoto | 1:18 | Ford GT40 MK II Roadster 1966 is a stunning diecast model that celebrates the iconic Ford GT40, known for its legendary performance and triumph at the Sebring 12 Hours. This meticulously crafted model is a collector's dream, featuring exceptional detail and accuracy that captures the essence of the original race car.</p>

  <p>Winner, 1966 Sebring 12 Hours: Driven by Ken Miles and Lloyd Ruby, the Ford GT40 MK II Roadster took a surprising victory at the 1966 Sebring 12 Hours. The car, previously known as the Ford X-1, was converted to Mk II specifications by Kar Kraft for Shelby American. After testing several transmissions in early practice sessions, the car finally found success with a standard gearbox, leading it to a legendary win.</p>

  <h3>History and Performance</h3>
  <p>Originally delivered to Shelby American and dubbed the "Ford X-1," the GT40 Roadster was lighter than its coupe counterpart while retaining the same powerful 7-liter V8 engine. In the 1966 Sebring race, the roadster held its own against Ferrari's 330P3, with Miles and Ruby taking it easy during qualifying but still achieving the fifth fastest time.</p>
  
  <p>During the race, Ken Miles started the #1 Roadster, keeping pace with the Ferrari until his Ford teammate, Dan Gurney, suffered engine failure just a quarter-mile from the finish line. Miles took advantage of the opportunity, crossing the line in first place and claiming victory in what would be the GT40 Roadster's first and last race.</p>

  <h3>Product Details</h3>
  <ul>
    <li><strong>Brand:</strong> Exoto</li>
    <li><strong>Scale:</strong> 1:18</li>
    <li><strong>Model:</strong> Ford GT40 MK II Roadster</li>
    <li><strong>Race:</strong> 1966 Sebring 12 Hours</li>
    <li><strong>Drivers:</strong> Ken Miles, Lloyd Ruby</li>
    <li><strong>Color:</strong> Authentic Red</li>
    <li><strong>Category:</strong> Diecast Model</li>
    <li><strong>Manufacturer:</strong> Shelby American</li>
    <li><strong>Year:</strong> 1966</li>
  </ul>

  <h3>Key Moments</h3>
  <p>One of the most memorable moments of the 1966 Sebring 12 Hours was the dramatic finish when Gurney's engine seized, allowing the Ford GT40 MK II Roadster to swoop in and take the victory. This marked a remarkable moment in Ford's racing history, further cementing the GT40's legacy in motorsport.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/fgt.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ex-4.jpg"
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
            <iframe width="560" height="315" src="{{ page.youtube_link }}" frameborder="0" allowfullscreen></iframe>
        </p>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
</div>

<div style="text-align: center;">
    <p>Read more about the Exoto | 1:18 | Ford GT40 MK II Roadster 1966 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast%20models/exoto/ford/gt40/2024/09/25/exoto-ford-gt40-mk-ii-roadster-1966.html" target="_blank">Exoto | 1:18 | Ford GT40 MK II Roadster 1966</a>
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
