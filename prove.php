<!--INTEGRATE WORDPRESS-->
<!--?php 
define('WP_USE_THEMES', false);
require('wp-core/wp-blog-header.php');
?-->
<html lang="en">
    <head>
        <!--IMPORT HEAD-->
        <?php include 'src/php/head.php' ?>
    </head>
    <body onload="" class="bg-dark " id="">

      <div id="home" class="flex cont rows z-2 perfect-center">
                        <div class="star-row perfect-center">
                            <div id="starMove"class="f-1 "> 
                                <?php include 'logoAppear.php' ?>
                                  
                            </div>
                            <div id="whoBox"class="f-1 ">                                   
                            </div>
                            
                        </div>    
                        <div id="scrollbtn"class="star-row perfect-center">
                            <div class="f-2">
                                <div class="scroll-btn">
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </div>
                            </div>
                        </div>
                           
                    </div>

    <!--IMPORT SCRIPT-->
    <?php include 'src/php/script.php' ?>
    </body> 
</html>