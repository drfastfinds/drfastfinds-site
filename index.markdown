---
layout: default
title: Dr. Fast Finds
---

<style>
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    padding: 20px;
}

.product {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    width: 200px; /* Fixed width for the product container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Ensure no content overflows */
    position: relative; /* Makes the container the reference for the absolute positioning */
    min-height: 350px; /* Fixed minimum height for consistency */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures the button stays at the bottom */
}

.product img {
    width: 100%; /* Image takes the full width of the container */
    height: auto; /* Keep the image height auto to maintain aspect ratio */
    max-height: 150px; /* Set a max height for the image */
    object-fit: contain; /* Ensures the entire image is visible within the square */
    display: block;
    margin: 0 auto;
}

.product p {
    margin: 5px 0; /* Adjust margins for text */
}

.order-now {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffcc00; /* Yellow background */
    color: #0056b3; /* Blue text */
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
    margin-top: auto; /* Push the button to the bottom */
}

.order-now:hover {
    background-color: #e6b800; /* Darker yellow on hover */
}

.buy-now, .add-to-cart {
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

.buy-now:hover, .add-to-cart:hover {
    background-color: #0056b3;
}
.sold-out {
    color: red;
    font-size: 16px; /* Slightly smaller font size for sold-out text */
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
}

@media (max-width: 768px) {
    .product {
        width: calc(33.33% - 35px); /* 3 products per row */
    }
}

@media (max-width: 480px) {
    .product {
        width: calc(33.33% - 35px); /* 3 products per row */
    }

    .product p,
    .buy-now,
    .add-to-cart,
    .sold-out {
        font-size: 10px; /* Further reduced font size for mobile */
    }
}
    
</style>


<div class="gallery">

<div class="product">
        <a href="{{ site.baseurl }}/products/nissan-240-rs">
            <img src="{{ site.baseurl }}/assets/images/nsnr.png" alt="Beemax Nissan 240 RS">
            <p>Nissan 240 RS '84 Safari Rally 1/24 Model Car Kit</p>
            <p>Price: $155.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>
    
    <!-- Bugatti Divo -->
<div class="product">
    <a href="{{ site.baseurl }}/products/bugatti-divo">
        <img src="{{ site.baseurl }}/assets/images/divo.jpg" alt="Bburago Bugatti Divo - Blue 1/18 Scale Model">
        <p>Bburago Bugatti Divo - Blue 1/18 Scale Model</p>
        <p>Price: $110.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Porsche 963 -->
<div class="product">
    <a href="{{ site.baseurl }}/products/porsche-963">
        <img src="{{ site.baseurl }}/assets/images/963.jpg" alt="Bburago Porsche 963 LMDH #5 Le Mans 1/24 Scale">
        <p>Bburago Porsche 963 LMDH #5 Le Mans 1/24 Scale Model</p>
        <p>Price: $40.00</p>
        <p class="sold-out">SOLD OUT</p>
    </a>
</div>

<div class="product">
        <a href="{{ site.baseurl }}/products/ferrari-312p">
            <img src="{{ site.baseurl }}/assets/images/312.jpg" alt="Bburago Ferrari 312P: A Diecast Tribute to Racing History">
            <p>Bburago Ferrari 312P 1/43 Scale Model</p>
            <p>Price: $35.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>

<div class="product">
        <a href="{{ site.baseurl }}/products/ford-gt40-roadster-sebring">
            <img src="{{ site.baseurl }}/assets/images/fgt.jpg" alt="Exoto | 1:18 | Ford GT40 MK II Roadster 1966 | Winner, Sebring">
            <p>Exoto 1/18 Ford GT40 MK II Roadster 1966 Winner, Sebring (Retired)</p>
            <p>Price: $30000.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>

 <div class="product">
    <a href="{{ site.baseurl }}/products/minolta-supra-turbo-a70-1988-intertec">
        <img src="{{ site.baseurl }}/assets/images/hmin.jpg" alt="Hasegawa Minolta Supra Turbo A70 `1988 InterTEC` (Model Car)">
        <p>Hasegawa Minolta Supra Turbo A70 `1988 InterTEC` 1/24 Model Car Kit</p>
        <p>Price: $80.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<div class="product">
        <a href="{{ site.baseurl }}/products/toyota-2000-gt">
            <img src="{{ site.baseurl }}/assets/images/2000gt-4.png" alt="Inter Allied Toyota 2000 GT">
            <p>Inter Allied Toyota 2000 GT 1/24 Model Car Kit</p>
            <p>Price: $150.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>

    <!-- Studio27 BMW F1.06 Sauber -->
<div class="product">
    <a href="{{ site.baseurl }}/products/studio27-bmw-f106">
        <img src="{{ site.baseurl }}/assets/images/bms.jpg" alt="Studio27 BMW F1.06 Sauber 1/20 Scale">
        <p>Studio27 BMW F1.06 Sauber 1/20 Model Car Kit</p>
        <p>Price: $255.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- TimeMicro AE86 Initial D Anime Version -->
<div class="product">
    <a href="{{ site.baseurl }}/products/timemicro-ae86-initial-d">
        <img src="{{ site.baseurl }}/assets/images/ind.jpg" alt="TimeMicro AE86 Initial D Anime Version 1/64 Scale Model">
        <p>TimeMicro AE86 Initial D Anime Version 1/64 Scale Model (Limited Edition)</p>
        <p>Price: $45.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- TimeMicro Tiffany Blue Trailer Set -->
<div class="product">
    <a href="{{ site.baseurl }}/products/timemicro-tiffany-blue-trailer">
        <img src="{{ site.baseurl }}/assets/images/tftra.jpg" alt="TimeMicro Tiffany Blue Trailer Set: Volkswagen and Spyder">
        <p>TimeMicro Tiffany Blue Trailer Set: Volkswagen and Spyder 1/64 Scale Model</p>
        <p>Price: $70.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- TimeMicro Tiffany Blue Spyder -->
<div class="product">
    <a href="{{ site.baseurl }}/products/tiffany-blue-spyder">
        <img src="{{ site.baseurl }}/assets/images/tmblue.jpg.jpg" alt="TimeMicro Tiffany Blue Spyder 1/64 Scale Model">
        <p>TimeMicro Tiffany Blue Spyder 1/64 Scale Model</p>
        <p>Price: $40.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>


<!-- TimeMicro Normal Alloy Model Nissan GTR3.0 Tiffany Blue -->
<div class="product">
    <a href="{{ site.baseurl }}/products/timemicro-nissan-gtr3">
        <img src="{{ site.baseurl }}/assets/images/tmlb.jpg" alt="TimeMicro Normal Alloy Model: Nissan GTR3.0 Tiffany Blue, 1/64">
        <p>TimeMicro Nissan GTR3.0 Tiffany Blue, 1/64 Scale Model</p>
        <p>Price: $45.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- TimeMicro Coca Cola Spyder 918 Trailer Set -->
<div class="product">
    <a href="{{ site.baseurl }}/products/timemicro-coca-cola-spyder">
        <img src="{{ site.baseurl }}/assets/images/tmcola.png" alt="TimeMicro Coca Cola Spyder 918 Trailer Set 1/64 Scale Model">
        <p>TimeMicro Coca Cola Spyder 918 Trailer Set 1/64 Scale Model</p>
        <p>Price: $65.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Tamiya Toyota Gazoo Racing TS050 Hybrid -->
<div class="product">
    <a href="{{ site.baseurl }}/products/toyotagazoo">
        <img src="{{ site.baseurl }}/assets/images/tgaz.jpg" alt="Tamiya Toyota Gazoo Racing TS050 Hybrid 1/24 Scale">
        <p>Tamiya Toyota Gazoo Racing TS050 Hybrid 1/24 Model Car Kit</p>
        <p>Price: $100.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<div class="product">
        <a href="{{ site.baseurl }}/products/lotus-super-7">
            <img src="{{ site.baseurl }}/assets/images/lts7.jpg" alt="Tamiya Lotus Super 7 Series II: A Classic Roadster">
            <p>Tamiya Lotus Super 7 Series II 1/24 Model Car Kit</p>
            <p>Price: $65.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>


<!-- Tamiya 1/20 Red Bull Racing F1 Renault RB6 Grand Prix -->
<div class="product">
    <a href="{{ site.baseurl }}/products/tamiya-redbull-rb6">
        <img src="{{ site.baseurl }}/assets/images/rb6.jpg" alt="Tamiya 1/20 Red Bull Racing F1 Renault RB6 Grand Prix 1/20 Scale">
        <p>Tamiya 1/20 Red Bull Racing F1 Renault RB6 Grand Prix 1/20 Scale Model Car Kit (Retired)</p>
        <p>Price: $200.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Top Studio RB6 Super Detail-Up Set -->
<div class="product">
    <a href="{{ site.baseurl }}/products/top-studio-rb6">
        <img src="{{ site.baseurl }}/assets/images/tsrb.jpg" alt="Top Studio 1/20 RB6 Super Detail-Up Set">
        <p>Top Studio 1/20 RB6 Super Detail-Up Set (Retired)</p>
        <p>Price: $180.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Tamiya 1/12 McLaren MP4 -->
<div class="product">
    <a href="{{ site.baseurl }}/products/tamiya-mclaren-mp4">
        <img src="{{ site.baseurl }}/assets/images/tmc.jpg" alt="Tamiya 1/12 McLaren MP4/6">
        <p>Tamiya McLaren MP4/6 1/12 Model Car Kit (Retired)</p>
        <p>Price: $620.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Top Studio McLaren MP4/6 Super Detail-Up Set -->
<div class="product">
    <a href="{{ site.baseurl }}/products/top-studio-mp4">
        <img src="{{ site.baseurl }}/assets/images/mp46.jpg" alt="Top Studio McLaren MP4/6 Super Detail-Up Set">
        <p>Top Studio McLaren MP4/6 Super Detail-Up Set (Retired)</p>
        <p>Price: $800.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- McLaren MP4/6 Full Sponsor (Tabu Design) -->
<div class="product">
    <a href="{{ site.baseurl }}/products/mclaren-mp46-tabu-design">
        <img src="{{ site.baseurl }}/assets/images/tabu.jpg" alt="McLaren MP4/6 Full Sponsor (Tabu Design)">
        <p>McLaren MP4/6 Full Sponsor (Tabu Design)</p>
        <p>Price: $50.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<div class="product">
        <a href="{{ site.baseurl }}/products/ferrari-f2003-ga-japan">
            <img src="{{ site.baseurl }}/assets/images/f2003.jpg" alt="Fujimi Ferrari F2003-GA Japan GP">
            <p>Fujimi Ferrari F2003-GA Japan GP 1/20 Model Car Kit (Retired)</p>
            <p>Price: $170.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>

 <div class="product">
        <a href="{{ site.baseurl }}/products/ferrari-f2003-ga-detail-up">
            <img src="{{ site.baseurl }}/assets/images/tsfr.jpg" alt="Ferrari F2003-GA Super Detail-Up Set by Top Studio">
            <p>Ferrari F2003-GA Super Detail-Up Set by Top Studio (Retired)</p>
            <p>Price: $185.00</p>
            <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
        </a>
    </div>

    <!-- TPC 1:64 RWB 993 -->
<div class="product">
    <a href="{{ site.baseurl }}/products/rwb">
        <img src="{{ site.baseurl }}/assets/images/tpc.jpg.jpg" alt="TPC 1:64 RWB 993 1/64 Scale Model">
        <p>TPC 1:64 RWB 993 1/64 Scale Model (Limited Edition)</p>
        <p>Price: $35.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Hoonipigasus Model -->
<div class="product">
    <a href="{{ site.baseurl }}/products/hoonipigasus">
        <img src="{{ site.baseurl }}/assets/images/hpig-4.jpg" alt="Hoonipigasus: Ken Block's Porsche Racing Legend">
        <p>TPC 1/64 Hoonipigasus Scale Model (Limited Ediition)</p>
        <p>Price: $50.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>


<!-- Porsche 911 1969 Spa-Francorchamps -->
<div class="product">
    <a href="{{ site.baseurl }}/products/porsche-911-spa-francorchamps">
        <img src="{{ site.baseurl }}/assets/images/tp911.jpg" alt="Porsche 911 1969 Spa-Francorchamps 24th 1st #39 G.Chasseuil / C.Ballot-Lena">
        <p>Trofeu Porsche 911 1969 Spa-Francorchamps 24th 1st #39 1/43 Scale Model</p>
        <p>Price: $190.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Trofeu Alpine A110 -->
<div class="product">
    <a href="{{ site.baseurl }}/products/A110">
        <img src="{{ site.baseurl }}/assets/images/trfa.jpg" alt="Trofeu Alpine A110 1/43 Scale Model">
        <p>Trofeu Alpine A110 1974 East African Safari #15 1/43 Scale Model</p>
        <p>Price: $155.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>

<!-- Lola T292 1973 SPA1000km -->
<div class="product">
    <a href="{{ site.baseurl }}/products/lola-t292-1973">
        <img src="{{ site.baseurl }}/assets/images/lola.jpg" alt="Lola T292 1973 SPA1000km 1/43 Scale">
        <p>Trofeu Lola T292 1973 SPA1000km #66 1/43 Scale MOdel </p>
        <p>Price: $175.00</p>
        <a href="{{ site.baseurl }}/order" class="order-now">Order Now</a>
    </a>
</div>
    
</div>

