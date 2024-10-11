---
layout: product
title: "Tamiya 1/20 Red Bull Racing F1 Renault RB6 Grand Prix"
price: 200.00
youtube_link: "https://youtube.com/shorts/qtSTcmoXqks?feature=share"
description: |
  <p>The Tamiya 1/20 Red Bull Racing F1 Renault RB6 Grand Prix model is an exceptional kit for enthusiasts and collectors. This detailed model captures the essence of one of the most successful Formula 1 cars in history, known for its innovative design and high performance.</p>

  <p>The RB6 was the car that brought Red Bull Racing its first Constructors' and Drivers' World Championship in 2010, driven by Sebastian Vettel and Mark Webber. With a 2.4L Renault RS27 V8 engine, limited to 18,000 RPM, and an aerodynamic design by Adrian Newey, the RB6 was a dominant force on the track. It secured 9 race victories, 15 pole positions, and 6 fastest laps during the season.</p>

  <p>This model kit by Tamiya offers precise detailing and high-quality materials, allowing you to recreate the iconic look of the Red Bull RB6 with its distinct carbon fiber composite chassis and pushrod suspension. The attention to detail includes the semi-automatic gearbox and Bridgestone tires on 13" OZ wheels.</p>

  <p>For a closer look, check out the video from Johansson's Car Modeling Studio:</p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rTrcbZC-6Wg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <p>Approximate dimensions: 1/20 scale.</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/rb6.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rb6-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rb6-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rb6-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/rb6-4.jpg"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p>Price: ${{ page.price }}</p>
        <p>We recommend purchasing the <a href="https://drfastfinds.github.io/drfastfinds-site/products/top-studio-rb6" target="_blank">Top Studio 1/20 RB6 Super Detail-Up Set</a> to complement the pack and achieve the most detailed model possible!</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
</div>

<div style="text-align: center;">
    <p>For more details, check out the product video here: 
        <a href="{{ page.youtube_link }}" target="_blank">Watch on YouTube Shorts</a>
    </p>
    <p>Read more about the Tamiya 1/20 Red Bull Racing F1 Renault RB6 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/red%20bull/rb6/2024/09/25/tamiya-red-bull-racing-f1-renault-rb6.html">Tamiya Red Bull Racing F1 Renault RB6</a>
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
