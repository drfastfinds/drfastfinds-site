---
layout: product
title: "Bburago Ferrari 312P: A Diecast Tribute to Racing History"
price: 35.00
youtube_link: ""
description: |
  <p>The Bburago Ferrari 312P is a stunning diecast model that pays homage to one of the most iconic race cars in automotive history. This model beautifully captures the essence of the Ferrari 312P, known for its exceptional performance and rich racing heritage.</p>

  <p>With meticulous attention to detail and high-quality craftsmanship, this diecast model is a perfect addition to any collection and a true tribute to the spirit of racing.</p>

  <p>Approximate dimensions: 1/43 scale.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/312.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/312-4.jpg"
---

<div class="product-detail">
  <div class="product-image-box">
    <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
  </div>
  <div class="product-text">
    <p>The <strong>Bburago Ferrari 312P</strong> diecast model is a meticulously crafted tribute to one of Ferrari’s iconic racing cars from the late 1960s. Known for its sleek design and powerful V12 engine, the Ferrari 312P was Ferrari's entry into the highly competitive Group 6 Prototype-Sports Car category, aiming to regain dominance after boycotting the 1968 sports car season.</p>

    <p>This 1/43 scale diecast captures the essence of the 312P, originally equipped with a 3.0L V12 engine, mid-mounted for optimal weight distribution and performance. The car made its debut at the 1969 12 Hours of Sebring, where it secured a second-place finish with drivers <strong>Mario Andretti</strong> and <strong>Chris Amon</strong>. It was a promising start that signaled Ferrari’s return to endurance racing glory.</p>

    <p>The Ferrari 312P was designed both as an open-top Barchetta and later as a closed-top Berlinetta, showcasing Ferrari's adaptability in creating aerodynamic solutions to improve performance. Its short-lived racing career spanned key races, including the 24 Hours of Le Mans, where it faced off against fierce competitors like the Porsche 908 and the emerging Porsche 917. Despite its challenges, the 312P remains a symbol of Ferrari's dedication to motorsport excellence.</p>

    <p>The Bburago model brings this racing legend into your collection, reflecting the fine details of the Ferrari 312P’s body, interior, and engine layout. Whether you're a die-hard Ferrari fan or a collector of motorsport history, this model is a must-have piece.</p>

    <p><strong>Approximate dimensions:</strong> 1/43 scale.</p>

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
  <p>Read more about the Bburago Ferrari 312P on our blog: 
    <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/ferrari/bburago/312p/2024/09/25/bburago-ferrari-312p.html" target="_blank">Bburago Ferrari 312P</a>
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
