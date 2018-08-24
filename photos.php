<?php include("header.php"); ?>
    <div class="photos">

        <button class="back" onClick="previousGallery()"><i class="fas fa-arrow-left"></i></button>

        <div class="gallery">
            <img class="js-slides" src="./pics/cluj-piata-muzeului.jpg"/>
            <img class="js-slides hidden" src="./pics/botanical-garden.jpg">
            <img class="js-slides hidden"src="./pics/botanical-garden.jpg">
        </div>

        <div class="gallery hidden">
            <img class="js-slides" src="./pics/cluj-centru.jpg"/>
            <img class="js-slides hidden"src="./pics/biserica-centru.jpg">
            <img class="js-slides hidden"src="./pics/botanical-garden.jpg">
        </div>

        <div class="gallery hidden">
            <img class="js-slides" src="./pics/piata-muzeului.jpg"/>
            <img class="js-slides hidden" src="./pics/matei-corvin.jpg">
            <img class="js-slides hidden"src="./pics/botanical-garden.jpg">
        </div>

        <button class="forward" onClick="nextGallery()"><i class="fas fa-arrow-right"></i></button>

        <button onClick="slideUp()" class="up"><i class="fas fa-arrow-up"></i></button>
        <button class="down"><i class="fas fa-arrow-down"></i></button>

    </div>
<?php include("footer.php"); ?>