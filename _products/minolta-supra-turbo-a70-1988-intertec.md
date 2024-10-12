---
layout: product
title: "Hasegawa Minolta Supra Turbo A70 `1988 InterTEC` (Model Car)"
price: 80.00
youtube_link: "https://www.youtube.com/embed/Xxq29MpZ69g"
youtube_video_id: "Xxq29MpZ69g"  # Change here to use video ID
blog_link: ""
description: |
  <p>The Hasegawa Minolta Supra Turbo A70 `1988 InterTEC` is a detailed 1/24 scale model car kit that replicates the iconic racing machine that competed in the All Japan Touring Car Championship. This model captures the spirit of the Toyota Supra with its striking design and impressive performance history.</p>

  <p>This highly detailed kit includes a variety of new plastic parts, allowing builders to recreate the wide-body, Minolta-colored machine introduced in the final round of the JTC in 1988. Whether you're a collector or a hobbyist, this model provides a rewarding building experience and an impressive display piece for any motorsport enthusiast.</p>

  <p><strong>Brand:</strong> Hasegawa</p>
  <p><strong>Model:</strong>  Minolta Supra Turbo A70 `1988 InterTEC`</p>
  <p><strong>Scale:</strong> 1/24</p>
  <p><strong>Category:</strong> Model Kit</p>
  <p><strong>Includes:</strong> High-quality plastic parts, decals, and detailed instructions for assembly</p>

  <p>Check out our product video <a href="https://youtube.com/shorts/l2EClcuf04o?feature=share" target="_blank">here</a>.</p>


  <h3>About the Toyota Supra A70</h3>
  <p>The Minolta Supra Turbo A70 was a formidable competitor in the 1988 All Japan Touring Car Championship. Known for its sleek design and turbocharged power, it raced under the Tom's team banner, showcasing the engineering prowess of Toyota.</p>
  
  <h3>Racing History</h3>
  <p>This model commemorates the 1988 season, where it participated in the final round at Fuji Speedway, driven by G. Reese and P. Barilla. The Toyota Supra's success on the track made it a beloved icon among racing enthusiasts.</p>

image: "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin.jpg"
thumbnails:
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-1.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-2.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-3.jpg"
  - "https://drfastfinds.github.io/drfastfinds-site/assets/images/hmin-4.jpg"
---

<div class="product-detail">
    <div class="product-image-box">
        <img class="main-image" src="{{ page.image }}" alt="{{ page.title }}">
    </div>
    <div class="product-text">
        <p>{{ page.description }}</p>
        <p>Price: ${{ page.price }}</p>
        <a href="{{ site.baseurl }}/order" class="buy-now">Order Now</a>
        <p class="youtube-link">For a more detailed look, check out T-GARAGE carmodel builder's video here: 
            <iframe width="560" height="315" src="{{ page.youtube_link }}" frameborder="0" allowfullscreen></iframe>
        </p>
        <p>Read more about the Hasegawa Minolta Supra Turbo A70 on our blog: 
            <a href="https://drfastfinds.github.io/drfastfinds-site/collectibles/model%20kits/hasegawa/toyota/minolta/2024/09/25/hasegawa-minolta.html" target="_blank">Hasegawa Minolta Supra Turbo A70 `1988 InterTEC`</a>
        </p>
    </div>
</div>

<div class="thumbnail-carousel">
    {% for thumbnail in page.thumbnails %}
    <img class="thumbnail" src="{{ thumbnail }}" alt="Thumbnail of {{ page.title }}">
    {% endfor %}
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
