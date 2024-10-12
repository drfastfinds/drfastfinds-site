---
layout: product
title: "Tamiya 1/12 McLaren MP4/6"
price: 620.00
youtube_link: ""  # Add a YouTube link if you have one
youtube_video_id: "l_ctx2WNEJI"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/mclaren/mp4/2024/09/25/tamiya-mclaren-mp4.html"

description: |
  <p>The Tamiya 1/12 McLaren MP4 model kit is a stunning representation of the legendary McLaren Formula 1 car. This highly detailed model is perfect for serious model builders and F1 fans alike, offering a 1/12 scale build that captures the technical brilliance and racing spirit of the iconic MP4/6.</p>

  <p>The McLaren MP4/6 is a Formula One racing car designed by McLaren's Neil Oatley, Matthew Jeffreys, David North, David Neilson, Bob Bell, and Mike Gascoyne; powered by the Honda RA121E V12 engine for use in the 1991 Formula One season, with the engine's design and development led by Osamu Goto. It was driven by reigning World Champion, Brazilian Ayrton Senna, and Austria's Gerhard Berger. Ayrton Senna would win his third World Championship in the MP4/6. The MP4/6 was notable for being the last F1 car to win the championship with a manual gearbox and the only F1 car powered by a V12 engine to do so.</p>

  <p>This premium kit includes fine details, from the engine components to the aerodynamic features, providing a realistic and challenging build for experienced modelers.</p>

  <p>For a closer look, check out the videos from Scalewheels and Hussein El Kaissy:</p>
  
  <p>Scalewheels Build Video:</p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/qmZVwPwAZB0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <p>Hussein El Kaissy Build Video:</p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/h36-8ZOGRhQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <p><strong>Brand:</strong> Tamiya</p>
  <p><strong>Model:</strong> McLaren MP4/6</p>
  <p><strong>Scale:</strong> 1/12</p>
  <p><strong>Category:</strong> Model Car Kit</p>
  <p><strong>Item Number:</strong> 12028</p>

  <p>Care Instructions: Handle with care during assembly.</p>

  <p>For the best results, consider purchasing the full set: 
  <a href="https://drfastfinds.github.io/drfastfinds-site/products/top-studio-mp4" target="_blank">Top Studio MP4 Set</a> 
  and 
  <a href="https://drfastfinds.github.io/drfastfinds-site/products/mclaren-mp46-tabu-design" target="_blank">the McLaren MP4/6 Tabu Design Decals</a> to enhance the historical accuracy of your build.</p>

  <p>For more insights into the build experience, check out these forum discussions: 
    <a href="https://intscalemodeller.com/viewtopic.php?t=29175" target="_blank">IntScaleModeller</a>, 
    <a href="https://www.modelcarsmag.com/forums/topic/152775-tamiya-mclaren-mp46-build/" target="_blank">ModelCarsMag</a>, and 
    <a href="https://www.britmodeller.com/forums/index.php?/topic/235060365-tamiya-mclaren-mp46-112/" target="_blank">Britmodeller</a>.
</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmc-4.jpg"
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
    <p>Read more about the Tamiya 1/12 McLaren MP4 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/mclaren/mp4/2024/09/25/tamiya-mclaren-mp4.html">Tamiya McLaren MP4</a>
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
