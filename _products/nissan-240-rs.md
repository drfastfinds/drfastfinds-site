---
layout: product
title: "Beemax 1/24 Nissan 240 RS '84 Safari Rally"
price: 155.00
youtube_video_id: "lmYuXr5jG9o"  # Change here to use video ID
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/beemax/nissan/240%20rs/2024/09/25/beemax-nissan-240-rs.html"
description: >
  <p>The Beemax Nissan 240 RS is a highly detailed model kit that captures the essence of this iconic rally car, which debuted in 1983 and competed in the 1984 Safari Rally. Known for its performance and success in motorsport, this model is a must-have for enthusiasts and collectors alike.</p>

  <p>This assembly kit replicates the Nissan 240RS that participated in the 1984 Safari Rally, featuring unique details such as large over fenders, animal guards, and auxiliary lights. The interior also includes competition-specific details like a roll cage, providing a rewarding building experience and allowing you to recreate one of Nissan's legendary vehicles.</p>
  
  <p><strong>Brand:</strong> Beemax</p>
  <p><strong>Model:</strong> Nissan 240 RS</p>
  <p><strong>Scale:</strong> 1/24</p>
  <p><strong>Category:</strong> Model Kit</p>
  <p><strong>Item Number:</strong> BX24041</p>
  <p><strong>Includes:</strong> High-quality plastic parts, decals, and detailed instructions for assembly</p>

  <p>You can see our short product video <a href="https://youtube.com/shorts/ckC6IL12hn0?feature=share" target="_blank">here</a>.</p>


  <p>For enthusiasts looking for more information about the Beemax Nissan 240 RS and its construction, we recommend checking out these detailed forum discussions: <a href="https://www.britmodeller.com/forums/index.php?/topic/235099082-beemax-nissan-240rs-safari-rally-1984/" target="_blank">Beemax Nissan 240RS - Safari Rally 1984</a> and <a href="https://www.britmodeller.com/forums/index.php?/topic/235095383-beemax-nissan-240-rs-safari-rally/" target="_blank">Beemax Nissan 240 RS - Safari Rally</a>. These threads provide insights from fellow builders and offer tips and techniques for creating a stunning model.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr.png"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-1.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-2.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-3.png"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/nsnr-4.png"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
<div class="youtube-video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/lmYuXr5jG9o" frameborder="0" allowfullscreen></iframe>
</div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p><strong>Price:</strong> ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>

        <!-- Insert Product Details Here -->
        <div class="product-details">
          {{ page.product_details | markdownify }}
        </div>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
</div>

<div style="text-align: center;">
    <p>Read more about the Beemax Nissan 240 RS on our blog: 
        <a href="{{ page.blog_link }}" target="_blank">Beemax Nissan 240 RS</a>
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

.youtube-video {
    flex-shrink: 0; 
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
