<?php include("header.php"); ?>
    <div class="photos">
        <button onClick="previousSlide()"><i class="fas fa-arrow-left"></i></button>
        <button onClick="nextSlide()"><i class="fas fa-arrow-right"></i></button>

        <div class="slide">
            <img src="./pics/cluj-piata-muzeului.jpg"/>
        </div>

        <div class="slide hidden">
            <img src="./pics/cluj-centru.jpg"/>
        </div>

        <div class="slide hidden">
            <img src="./pics/piata-muzeului.jpg"/>
        </div>
    </div>
<?php include("footer.php"); ?>