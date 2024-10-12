---
layout: product
title: Tamiya Toyota Gazoo Racing TS050 Hybrid 1/24 Scale
price: 100.00
youtube_link: "https://youtube.com/shorts/qtSTcmoXqks?feature=share"
youtube_video_id: "VQ9nJLL0Ppk"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/toyota%20gazoo%20racing/ts050%20hybrid/2024/09/25/toyota-gazoo-ts050.html"

description: |
  <p>The Tamiya Toyota Gazoo Racing TS050 Hybrid is a must-have model for motorsport enthusiasts and collectors alike. Limited to 3 per household, this high-quality kit accurately reproduces the body form of the actual TS050, focusing on aerodynamics and incorporating various aero devices, just like the real vehicle.</p>

  <p>The Toyota TS050 Hybrid, a closed-monocoque LMP1 hybrid sports prototype, is the direct successor to the TS040 Hybrid and debuted in the FIA World Endurance Championship in 2016. It features a 2.4L V6 twin-turbocharged engine combined with an advanced hybrid system, producing a total of 1000 hp. Despite its challenges, the TS050 clinched the 2019–20 FIA World Endurance Championship.</p>

  <p>This model captures the essence of the iconic TS050 with plated cockpit roof details, LED lights, and decals for the 7th and 8th cars. The kit also includes masking stickers for different colors. Build enthusiasts can recreate the dramatic aerodynamics that defined Toyota's LMP1 prototype as it contended at Le Mans and other FIA endurance races.</p>

  <p>Check out our product video <a href="https://youtube.com/shorts/qtSTcmoXqks?feature=share" target="_blank">here</a>.</p>

  <p><strong>Brand:</strong> Tamiya</p>
  <p><strong>Model:</strong> Toyota Gazoo/p>
  <p><strong>Scale:</strong> 1/24</p>
  <p><strong>Category:</strong> Model Car Kit</p>

  <p>Care Instructions: Wipe clean.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tgaz-3.jpg"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        
        <!-- Embedded build video -->
        <p>For a closer look, see Scaled Down Customs' video:</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5jZxajKhcs8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
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
    <p>Read more about the Tamiya Toyota Gazoo Racing TS050 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/toyota%20gazoo%20racing/ts050%20hybrid/2024/09/25/toyota-gazoo-ts050.html">The Tamiya Toyota Gazoo Racing TS050 Hybrid: A Collector's Model</a>
    </p>
    <p>Watch the product video here: 
        <a href="{{ page.youtube_link }}" target="_blank">View on YouTube Shorts</a>
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
