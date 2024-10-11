---
layout: product
title: "Bburago Ferrari 312P 1/43 Scale Model"
price: 35.00
image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/312.jpg"  # Main image
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-4.jpg"
youtube_link: "https://www.youtube.com/embed/lmYuXr5jG9o"  # Embed link
description: |
  <p>The Bburago Ferrari 312P diecast model is a meticulously crafted tribute to one of Ferrari’s iconic racing cars from the late 1960s. Known for its sleek design and powerful V12 engine, the Ferrari 312P was Ferrari's entry into the highly competitive Group 6 Prototype-Sports Car category, aiming to regain dominance after boycotting the 1968 sports car season.</p>

  <p>This 1/43 scale diecast captures the essence of the 312P, originally equipped with a 3.0L V12 engine, mid-mounted for optimal weight distribution and performance. The car made its debut at the 1969 12 Hours of Sebring, where it secured a second-place finish with drivers Mario Andretti and Chris Amon. It was a promising start that signaled Ferrari’s return to endurance racing glory.</p>

  <p>The Ferrari 312P was designed both as an open-top Barchetta and later as a closed-top Berlinetta, showcasing Ferrari's adaptability in creating aerodynamic solutions to improve performance. Its short-lived racing career spanned key races, including the 24 Hours of Le Mans, where it faced off against fierce competitors like the Porsche 908 and the emerging Porsche 917. Despite its challenges, the 312P remains a symbol of Ferrari's dedication to motorsport excellence.</p>

  <p>The Bburago model brings this racing legend into your collection, reflecting the fine details of the Ferrari 312P’s body, interior, and engine layout. Whether you're a die-hard Ferrari fan or a collector of motorsport history, this model is a must-have piece.</p>

  <p>Approximate dimensions: 1/43 scale.</p>
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

<div class="youtube-link">
    <h3>Watch the Ferrari 312P in Action</h3>
    <iframe width='560' height='315' src='{{ page.youtube_link }}' frameborder='0' allowfullscreen></iframe>
</div>

<div style="text-align: center;">
    <p>Read more about the Bburago Ferrari 312P on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/bburago/ferrari/312p/2024/10/09/bburago-ferrari-312p.html" target="_blank">Bburago Ferrari 312P</a>
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
