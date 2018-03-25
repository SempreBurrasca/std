<!--INTEGRATE WORDPRESS-->
<?php 
define('WP_USE_THEMES', false);
require('wp-core/wp-blog-header.php');
?>
<html lang="en">
    <head>
        <!--IMPORT HEAD-->
        <?php include 'src/php/head.php' ?>
    </head>
    <body onload="centerizeX('btn-home')" class="bg-dark " id="">
        <script>
            anime({
                targets: '#stella .line',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop: true
            })
        </script>
                    <!--LOGO-->
                    <div id="home" class="flex cont rows perfect-center">
                        <div class="star-row perfect-center">
                            <div class="f-1 ">
                                <div id="starTap" class="flex cont columns">
                                <svg version="1.1" id="logotype" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 924.181 204.964" style="enable-background:new 0 0 924.181 204.964;" xml:space="preserve">
                                    <text transform="matrix(1 0 0 1 -1.525879e-04 155.9706)" style="fill:#ffffff; font-family:'TitilliumWeb-ExtraLight'; font-size:183.4961px;">Star</text>
                                    <text transform="matrix(1 0 0 1 660.4999 155.9706)" style="fill:#ffffff; font-family:'TitilliumWeb-ExtraLight'; font-size:183.4961px;">Tap</text>
                                </svg>

                                <svg version="1.1" id="stella" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 277.911 449.879" style="enable-background:new 0 0 277.911 449.879;" xml:space="preserve">
                                    <path class="line" style="fill:none;stroke:#FFFFFF;stroke-miterlimit:10;" d="M138.956,0v449.879V0z"/>
                                    <path class="line"style="fill:none;stroke:#FFFFFF;stroke-miterlimit:10;" d="M0,220.042h277.911H0z"/>
                                    <path class="line"style="fill:none;stroke:#FFFFFF;stroke-miterlimit:10;" d="M39.602,243.439c0,0,122.751-122.751,122.751-122.751
                                        C162.353,120.689,39.602,243.439,39.602,243.439z"/>
                                    <path class="line"style="fill:none;stroke:#FFFFFF;stroke-miterlimit:10;" d="M77.982,281.195c0,0,121.445-121.445,121.445-121.445
                                        C199.427,159.75,77.981,281.195,77.982,281.195z"/>
                                    <polygon class="line"style="fill:none;stroke:#FFFFFF;stroke-miterlimit:10;" points="238.309,196.645 115.559,319.395 238.309,196.645 
                                        115.558,319.395 "/>
                                </svg>
                                    
                                
                                </div>
                                
                            </div>
                        </div>   
                        <div class="star-row perfect-center">                 
                                <div class="f-2">
                                    <a id="btn-home" onclick="toMission(-500)"  class="waves-effect waves-light btn">button</a>
                                </div>
                        </div>
                    </div>
                <!--MISSION-->

                <!--PORTFOLIO-->
                <!--CONTATTI-->


    <!--IMPORT SCRIPT-->
    <?php include 'src/php/script.php' ?>
    </body> 
</html>