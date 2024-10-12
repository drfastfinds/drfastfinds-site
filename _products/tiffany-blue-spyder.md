---
layout: product
title: TimeMicro Tiffany Blue Spyder 1/64 Scale Model
price: 40.00
youtube_link: "https://youtube.com/shorts/nGcBU-lzaz8?feature=share"  # Add a YouTube link if you have one
youtube_video_id: "nGcBU-lzaz8"
blog_link: "ttps://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/tiffany%20blue/timemicro/2024/09/25/time-micro-tiffany-blue-spyder-a-stylish-diecast-model.html"
description: |
  <p>The TimeMicro Tiffany Blue Spyder 1/64 Scale Model is a stylish and eye-catching addition for collectors and automotive enthusiasts. This model showcases the sleek design and vibrant Tiffany Blue color, making it a standout piece in any diecast collection.</p>

  <p>Perfectly crafted, this model captures the essence of luxury and performance, combining aesthetics with excellent detailing. Whether for display or play, the Tiffany Blue Spyder represents a blend of elegance and speed that every car lover will appreciate.</p>

  <p><strong>Brand:</strong> TimeMicro</p>
  <p><strong>Model:</strong> Porsche 918 Spyder</p>
  <p><strong>Scale:</strong> 1/64</p>
  <p><strong>Category:</strong> Model Car</p>
  
image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmblue.jpg.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmblue-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/tmblue-3.jpg"
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
    <p>Read more about the TimeMicro Tiffany Blue Spyder on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/diecast/tiffany%20blue/timemicro/2024/09/25/time-micro-tiffany-blue-spyder-a-stylish-diecast-model.html">The TimeMicro Tiffany Blue Spyder: A Stylish Diecast Model</a>
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
