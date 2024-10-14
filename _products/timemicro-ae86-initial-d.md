---
layout: product
title: TimeMicro AE86 Initial D Anime Version 1/64 Scale Model
price: 45.00
youtube_link: "https://youtube.com/shorts/mNlnAmBNDQ8?feature=share"
youtube_video_id: "zDVjWrLf1OE"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/initial%20d/timemicro/ae86/2024/09/25/timemicro-ae86-initial-d.html"
description: |
  <p>The Limited Edition TimeMicro AE86 Initial D Anime Version is a fantastic model for fans of the legendary anime and car culture. This 1/64 scale model beautifully captures the essence of the iconic Toyota AE86, known for its role in Initial D and its reputation as a lightweight, agile performance vehicle.</p>

  <p>Commonly referred to as the eight-six or "Hachi-Roku," this car became an icon for a generation and continues to influence automotive enthusiasts. The GT Apex version, driven by Takumi Fujiwara in the anime, was praised for its perfect weight-to-power ratio, with a curb weight of around 950 kg and an output of 150 hp.</p>

  <p>Takumi's AE86, a Toyota Sprinter Trueno, is meticulously crafted in this scale model, reflecting the car's unique specifications from the series:</p>

  <ul>
    <li>Model (of the real car): Sprinter Trueno GT Apex</li>
    <li>Year: 1983</li>
    <li>Chassis: AE86</li>
    <li>Engine: 1.6L DOHC 16v 4A-GE</li>
    <li>Power: 150 hp (110 kW)</li>
    <li>Weight: 950 kg approx.</li>
    <li>Transmission: 5-speed manual</li>
    <li>Traction: FR</li>
  </ul>

  <p>In the story, Takumi's father, Bunta Fujiwara, made significant modifications to the car, including upgrading the engine to a Group A spec 4A-GE 20v with 240 hp at 11,000 rpm, making it a formidable competitor in the racing world.</p>

  <p>This model is a must-have for collectors and Initial D fans, showcasing the spirit of drifting and street racing that made the AE86 famous.</p>

  <p><strong>Brand:</strong> TimwMicro</p>
  <p><strong>Model:</strong> Toyota AE86</p>
  <p><strong>Scale:</strong> 1/64</p>
  <p><strong>Category:</strong> Model Car</p>
  <p><strong>Item Number:</strong> TM640407-S</p>
  <p><strong>Rarity:</strong> Limited Production Run, never produced again</p>
  

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/ind.jpg"
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
    <p>Read more about the TimeMicro AE86 Initial D on our blog: 
        <a href="{{ site.baseurl }}/products/timemicro-ae86-initial-d">The TimeMicro AE86 Initial D: A Collector's Dream</a>
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
