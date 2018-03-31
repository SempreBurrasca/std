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

                    <!--LOGO-->
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
                <!--MISSION
                <div id="mission" name="mission"class="flex cont rows perfect-center">
                        <div class="star-row perfect-center">
                            <div id="form"class="f-1 ">    
                            <div class="row">
                                <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col m6">
                                            <input id="name" type="text" class="validate">
                                            <label for="name">Name</label>
                                        </div>
                                        <div class="input-field col m6">
                                            <input id="last_name" type="text" class="validate">
                                            <label for="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input id="email" type="email" class="validate">
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                                            <label for="textarea1">Textarea</label>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12">
                                             <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 924.181 602.879" style="enable-background:new 0 0 924.181 602.879;width:100%;" xml:space="preserve">
                                                <g id="sendingStar"  >

                                                    <path class="line" style="fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                                                        M386.065,244.939c0,0,122.751-122.751,122.751-122.751L386.065,244.939z"/>
                                                    <path class="line" style="fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                                                        M424.444,282.695c0,0,121.445-121.445,121.445-121.445C545.889,161.25,424.444,282.695,424.444,282.695z"/>
                                                    <path class="line" style="fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="
                                                        M462.333,320.584c0,0,121.445-121.445,121.445-121.445C583.778,199.139,462.333,320.584,462.333,320.584z"/>
                                                </g>
                                                <rect id="st-activator" x="400" y="10" width="200" height="400" style="fill:red;opacity:0;"></rect>

                                            </svg>
                                        </div>
                                    </button>
                                    </div>
                                </form>
                            </div>
                                   
                                </form>
                            </div>  
                                
                            </div>
                        </div>   
                    </div>
                

                --><!--PORTFOLIO-->
                <!--CONTATTI-->

    <script>
           

    </script>
    <!--IMPORT SCRIPT-->
    <?php include 'src/php/script.php' ?>
    </body> 
</html>