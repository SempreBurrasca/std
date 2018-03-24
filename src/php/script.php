    <!-- particles.js container -->
    <div id="particles-js"></div>
    <!-- stats - count particles -->
    <div class="count-particles">
        <span class="js-count-particles"></span> 
    </div>
    <!--Importa librerie-->
    <script src='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
    <script src='https://threejs.org/examples/js/libs/stats.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.6.4/svg.min.js'></script>
    <script src="src/js/index.js"></script>
    <script src="src/js/anime.min.js"></script>
    <!--Script Sottotitoli-->
    <script>
            /*Generazione sottotitoli*/
            setInterval(function(){ 
                                    var sezioni = ["DIGITAL STRATEGIES", "BLOCKCHAIN", "PRODUCTION"];
                                    /*var prova = document.getElementById("sottotitolo").innerHTML*/
                                    var randomSezioni = sezioni[Math.floor(Math.random()*sezioni.length)];
                                    document.getElementById("sottotitolo").innerHTML = randomSezioni;
                                    if (randomSezioni == "DIGITAL STRATEGIES") {
                                        document.getElementById("sottotitolo").style.letterSpacing = "29px";
                                        /*document.getElementById("sottotitolo").style.transition = "all 1s";*/
                                        
                                    } else if (randomSezioni == "BLOCKCHAIN") {
                                        document.getElementById("sottotitolo").style.letterSpacing = "72px";
                                        /*document.getElementById("sottotitolo").style.transition = "all 1s";*/
                                        
                                    } else {
                                        document.getElementById("sottotitolo").style.letterSpacing = "72px";
                                        /*document.getElementById("sottotitolo").style.transition = "all 1s";*/
                                    };
                                    /*Prova Animazione
                                    var lineDrawing = anime({
                                        targets: '.lineDrawing .lines path',
                                        strokeDashoffset: [anime.setDashoffset, 0],
                                        easing: 'easeInOutSine',
                                        duration: 1500,
                                        delay: function(el, i) { return i * 250 },
                                        direction: 'alternate',
                                        loop: true
                                        });*/
                                }, 3000);
            


    </script>