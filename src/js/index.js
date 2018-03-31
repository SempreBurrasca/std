 // mousewheel.js plugin below - https://plugins.jquery.com/mousewheel/
  !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

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
    targets: "#hello",
    style: 'display:none;',
    offset:0
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
  .add({
    targets: '#button',
    opacity: 100,
    easing: 'easeInOutSine',
    duration: 4000,
    offset: 10000 // Starts at 2500ms of the timeline
  });
/*GENERAZIONE SOTTOTITOLI*/
  setInterval(function(){ 
    let sezioni = ["DIGITAL STRATEGIES", "BLOCKCHAIN", "PRODUCTION"];
    let randomSezioni = sezioni[Math.floor(Math.random()*sezioni.length)];
    document.getElementById("sottotitolo").innerHTML = randomSezioni;
    if (randomSezioni == "DIGITAL STRATEGIES") {
        document.getElementById("sottotitolo").style.letterSpacing = "29px";
        
    } else if (randomSezioni == "BLOCKCHAIN") {
        document.getElementById("sottotitolo").style.letterSpacing = "65px";
        
    } else {
        document.getElementById("sottotitolo").style.letterSpacing = "65px";
    };
  }, 3000); 

                       
/*ANIMAZIONE SCROLL-ICON*/
  
  IconScroll = anime({
      easing:'easeInOutSine',
      loop:true,
      autoplay: true,
      targets: '.scroll-btn',
      translateY: 20,
      duration: 1000
    });
/*Animazione sullo scroll*/
  /*var playButton = document.querySelector('#st-activator');

  myAnimation = anime({
      targets: '#starMove',
      translateY: 600,
      easing: 'linear',
      loop: false,
      autoplay:false
        
      
      
    })
    document.querySelector('#st-activator').onclick = myAnimation.play;
  
  window.addEventListener('scroll', function() { myAnimation.seek(pageYOffset ); });*/
  
  
  
  

  /*Animazione sul movimento della rotellina
    
  var seekAnim = anime({
    targets: '#logo',
    translateX: 350,
    duration: 2000,
    elasticity: 50,
    autoplay: false
    });
    let inizio = function(){
      seekAnim.play();
      console.log("funziona")
    }
    window.addEventListener('wheel', inizio)*/ 

/*PRIMA ANIMAZIONE SU MOUSE
  let k = 0; 
  
  let animationFirst = anime.timeline({
    loop: false,
    easing: 'linear',
    autoplay: false
  });

  animationFirst
    .add({
      targets: '#logo',
      opacity:0,
      duration: 2000,
      offset: 0
    })
    .add({
      targets:'#hello',
      style: 'display:visible;',
      offset:0
    })
    .add({
      targets: '#hello path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      direction: 'alternate',
      offset: 2000
    })
    .add({
      targets: '#hello text',
      opacity:100,
      easing: 'easeInOutSine',
      duration: 3500,
      offset: 4000

    })
    .add({
      targets: '#hello text',
      opacity:0,
      easing: 'easeInOutSine',
      duration:2000,
      offset:8000
    })
    .add({
      targets: '#finisHome',
      opacity:100,
      easing: 'easeInOutSine',
      duration:3000,
      offset:10000
    });
    let logo = document.getElementById('logo')
    let hello = document.getElementById('helloCont')
    let inizio = function(){
      
      let scrollbtn = document.getElementById('scrollbtn')
      animationFirst.play();
      console.log("funziona");
    }
    do {
    window.addEventListener('wheel', inizio);
    k += 1;
    } while (k==0);

    if (logo.style.opacity == 0){
      logo.style.display = 'none'
      scrollbtn.style.display = 'none'
    }
    if (hello.style.opacity == 0){
      hello.style.display = 'none'
    }*/

    /*ANIMAZIONE SEGUE ROTELLINA DEL MOUSE
      let k = 0
      window.addEventListener('wheel', function(e) {
        if (e.deltaY < 0) {
          k -=5
          
          console.log("animazione indietro");
        }
        if (e.deltaY > 0) {
          k +=5
          console.log("avanzamento animazione");
          
        }
      })
    

        var seekAnim = anime({
          targets: '#logo',
          translateY: 350,
          transition: 1,
          delay: function(el, i, l) { return i * 100; },
          elasticity: 200,
          autoplay: false,
          update: function(animation) {
            k = animation.progress;}
          });
          
          var seekProgressEl = document.querySelector('#StarMove .progress');
          
          window.addEventListener('wheel', function() { 

            seekAnim.seek(seekAnim.duration * (k / 100));
          });
          
          ['wheel','change'].forEach(function(evt) {
            window.addEventListener(evt, function() { 
              
              seekAnim.seek(seekAnim.duration * (k / 100));
            });
            
          
          });*/

/**/



