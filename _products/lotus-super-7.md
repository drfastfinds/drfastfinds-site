---
layout: product
title: "Tamiya Lotus Super 7 Series II: A Classic Roadster"
price: 65.00
youtube_link: "https://www.youtube.com/watch?v=vzSoMvOCPcw"
youtube_video_id: "l_ctx2WNEJI"
blog_link: "https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/lotus%20super%207/classic%20cars/2024/09/25/lotus-super7.html"
description: |
  <p>The Tamiya Lotus Super 7 Series II is an iconic model kit for fans of classic roadsters. Known for its lightweight design and incredible performance, this model kit captures the essence of the legendary Lotus Super 7. Whether you're a car enthusiast or a model kit hobbyist, this is a fantastic addition to your collection.</p>

  <p>With precise detailing and a true-to-life design, the Tamiya Lotus Super 7 offers both beginners and seasoned model builders a rewarding experience. Relive the golden age of British roadsters with this high-quality kit from Tamiya.</p>
  <p>Check out our product video <a href="https://youtube.com/shorts/1BtwaSTqewc?feature=share" target="_blank">here</a>.</p>

  <p><strong>Brand:</strong> Tamiya</p>
  <p><strong>Model:</strong> Lotus Super 7 Series II</p>
  <p><strong>Scale:</strong> 1/24</p>
  <p><strong>Category:</strong> Model Car Kit</p>
  <p><strong>Item Number:</strong> 24357</p>

  <p>For helpful resources and builds related to the Lotus Super 7 Series II, check out these links: 
    <a href="https://www.modelersite.com/en/112074/building-the-lotus-super-7-series-ii-for-beginners--tamiya-24046-1-24-scale" target="_blank">Building the Lotus Super 7 Series II for Beginners</a>, 
    <a href="https://finescale.com/product-info/kit-reviews/2020/11/workbench-review-tamiya-lotus-super-7-series-ii" target="_blank">Workbench Review: Tamiya Lotus Super 7 Series II</a>, 
    and 
    <a href="https://uamf.org.uk/viewtopic.php?t=4707" target="_blank">UAMF Forum Discussion</a>.</p>
  
image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/lts7.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/lts7-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/lts7-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/lts7-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/lts7-4.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/lts7.jpg"
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
    <p class="youtube-link">For a closer look, check out Grand Makett Autó's build video here:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vzSoMvOCPcw" frameborder="0" allowfullscreen></iframe>
    <p>Read more about the Lotus Super 7 on our blog: 
        <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/tamiya/lotus%20super%207/classic%20cars/2024/09/25/lotus-super7.html" target="_blank">Lotus Super 7 Series II</a>
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
