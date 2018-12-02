<?php include("header.php"); ?>
    <div class="thumbnails">
        <img class="thumbnail" src="./pics/cluj-piata-muzeului.jpg"/>
        <img class="thumbnail" src="./pics/cluj-centru.jpg"/>
        <img class="thumbnail" src="./pics/piata-muzeului.jpg"/>
    </div>
    <div class="photos hidden">
        <div class="gallery" data-id="1">
            <img class="js-slides" src="./pics/cluj-piata-muzeului.jpg"/>
            <img class="js-slides hidden" src="./pics/botanical-garden.jpg">
        </div>

        <div class="gallery hidden" data-id="2">
            <img class="js-slides" src="./pics/cluj-centru.jpg"/>
            <img class="js-slides hidden"src="./pics/biserica-centru.jpg">
            <img class="js-slides hidden"src="./pics/botanical-garden.jpg">
        </div>

        <div class="gallery hidden" data-id="3">
            <img class="js-slides" src="./pics/piata-muzeului.jpg"/>
            <img class="js-slides hidden" src="./pics/matei-corvin.jpg">
            <img class="js-slides hidden"src="./pics/botanical-garden.jpg">
        </div>

        <button class="back" onClick="previousGallery()"><i class="fas fa-arrow-left"></i></button>

        <button class="forward" onClick="nextGallery()"><i class="fas fa-arrow-right"></i></button>

        <button onClick="nextSlide()" class="up"><i class="fas fa-arrow-up"></i></button>

        <button onClick="previousSlide()" class="down"><i class="fas fa-arrow-down"></i></button>
    </div>
    </div>
<script src="script.js"></script>
</body>
</html>