---
layout: product
title: "Hasegawa Minolta Toyota 88C-V: Iconic Racing Machine"
price: 80.00
youtube_link: "https://www.youtube.com/embed/ASAkPLcMg8E"
description: |
  <p>The Hasegawa Minolta Toyota 88C-V represents an iconic racing machine from the world of endurance racing. This model kit, at 1/24 scale, perfectly captures the design and spirit of the Toyota 88C-V, known for its legendary performance at Le Mans and other endurance races.</p>

  <p>This highly detailed model kit allows builders to recreate one of the most memorable race cars from Toyota's rich motorsport history. Whether you're a collector or a hobbyist, this model kit provides a rewarding building experience and an impressive display piece for any motorsport enthusiast.</p>

  <p>Approximate dimensions: 1/24 scale.</p>

  <h3>About the Toyota 88C-V</h3>
  <p>The Toyota 88C-V was a Group C sports prototype entered by Toyota in 1988. The race car has a top speed of 375 km/h (233 mph), accelerates from 0–100 km/h (0–62 mph) in 3.8 seconds, produces 809 CV (595 kW; 798 hp) at 8000 rpm, and weighs 850 kg (1,870 lb). It is the successor to the Toyota 88C and the predecessor to the Toyota 89C-V. Designed and built by Dome, the 88C-V features a new design developed around Toyota's R32V 3.2 L (200 cu in) turbocharged V8 engine, replacing the previous model's inline-4. The car competed in the All Japan Sports Prototype Championship.</p>
  
  <h3>Racing History</h3>
  <p>The 88C-V made its debut at the 1988 Fuji 500 miles with a single car entered for Geoff Lees, Masanori Sekiya, and Keiichi Suzuki but couldn't finish due to mechanical issues. It later participated in the Japanese round of the World Sports-Prototype Championship, finishing but classified last.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-4.jpg"
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
        <p>Read more about the Hasegawa Minolta Toyota 88C-V on our blog: 
            <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/hasegawa/toyota/minolta/2024/09/25/hasegawa-minolta.html" target="_blank">Hasegawa Minolta Toyota 88C-V</a>
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
