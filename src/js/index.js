/* JUST THE PRETTY MOVING STARS ANIMATION */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#2EF6FF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100,
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": .5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


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
