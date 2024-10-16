---
layout: product
title: "Top Studio McLaren MP4/6 Super Detail-Up Set"
price: 800.00
youtube_link: ""  # Add a YouTube link if you have one
youtube_video_id: "zEJVOfeSzE4"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/top%20studio/mclaren/mp4/6/2024/09/25/mclaren-mp4-6-super-detail-up-set.html"

description: |
  <p>The Top Studio McLaren MP4/6 Super Detail-Up Set is an extraordinary kit for the most dedicated model builders and McLaren fans. This set is designed to enhance the Tamiya McLaren MP4/6 (89721) kit with extreme detail, offering precision parts to replicate the iconic F1 car's features to an unparalleled level of accuracy.</p>

  <p>From the engine to the chassis and aerodynamic components, this detail-up set is perfect for those seeking to push their modeling skills to the next level. It's a premium product designed for experts looking for the finest details.</p>

  <p><strong>Item Number:</strong> TD23160</p>

  <p>You can see our short product video <a href="https://youtube.com/shorts/sHnhm3nt3KA?feature=share" target="_blank">here</a>.</p>


  <p>Care Instructions: Handle with care during assembly. Recommended for experienced model builders.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/mp46.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/mp46-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/mp46-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/mp46-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/mp46-4.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/mp46.jpg"
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
    <p>Read more about the Top Studio McLaren MP4/6 Super Detail-Up Set on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/top%20studio/mclaren/mp4/6/2024/09/25/mclaren-mp4-6-super-detail-up-set.html">McLaren MP4/6 Super Detail-Up Set</a>
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
