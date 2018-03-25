/*CENTER ELEMENT X*/

function centerizeX(id){
  let width = document.getElementById(id).offsetWidth;
  let half = width / 2;
  
  document.getElementById(id).style.left = -half;
  document.getElementById(id).style.position = 'relative';
};  
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






/*START APPEAR*/
var appearStarTap = anime.timeline();

appearStarTap
  .add({
    targets: '#star .line',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: false,
    offset: 2000 // Starts at 0ms of the timeline
  })
  .add({
    targets: '#logotype-1',
    opacity: 100,
    easing: 'easeInOutSine',
    duration: 3500,
    offset: 5500 // Starts at 2000ms of the timeline
  })
  .add({
    targets: '#logotype-2',
    opacity: 100,
    easing: 'easeInOutSine',
    duration: 3500,
    offset: 5500 // Starts at 2000ms of the timeline
  })
  .add({
    targets: '#sottotitolo',
    opacity: 100,
    easing: 'easeInOutSine',
    duration: 3500,
    offset: 8000 // Starts at 2500ms of the timeline
  })
  .add({
    targets: '#particles-js',
    opacity: 5,
    easing: 'easeInOutSine',
    duration: 10000,
    offset: 0 // Starts at 2500ms of the timeline
  })
/*Generazione sottotitoli*/
setInterval(function(){ 
  let sezioni = ["DIGITAL STRATEGIES", "BLOCKCHAIN", "PRODUCTION"];
  let randomSezioni = sezioni[Math.floor(Math.random()*sezioni.length)];
  document.getElementById("sottotitolo").innerHTML = randomSezioni;
  if (randomSezioni == "DIGITAL STRATEGIES") {
      document.getElementById("sottotitolo").style.letterSpacing = "29px";
      
  } else if (randomSezioni == "BLOCKCHAIN") {
      document.getElementById("sottotitolo").style.letterSpacing = "72px";
      
  } else {
      document.getElementById("sottotitolo").style.letterSpacing = "72px";
  };
}, 3000); 

                       
/*SCROLL TO MISSION SECTION*/




      var missionTime = anime.timeline();
      missionTime
        .add({
          targets: '#sottotitolo',
          opacity: 0,
          easing: 'easeOutExpo',
          duration: 1000,
          offset: 0 
        })
        .add({
          targets: '#logo',
          scale: 0.5 ,
          translateY: -500,
          position: 'fixed',
          easing: 'easeOutExpo',
          duration: 1000,
          offset:1 
        }) 
        document.querySelector('#st-activator').onclick = missionTime.play;




  /*wheel events*/
  window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
      console.log('scrolling up');
    }
    if (e.deltaY > 0) {
      console.log('scrolling down');
    }
  });
