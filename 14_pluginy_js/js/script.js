'use strict';
(function(window){
    // select main carousel element
    var carousel = document.querySelector('.carousel');

    // render Moustache template
    var templateCarouselSlides = document.getElementById('template-carousel-slides').innerHTML;
    Mustache.parse(templateCarouselSlides);
    var slidesHTML = '';

    for (var i=0; i < carouselSlidesData.length; i++) {
        slidesHTML += Mustache.render(templateCarouselSlides, carouselSlidesData[i]);
    }

    carousel.insertAdjacentHTML('afterBegin', slidesHTML);

    // initialize flickity carousel

    var flkty = new Flickity( carousel, {
        // options
        imagesLoaded: true,
        pageDots: false,
        percentPosition: false,
        hash: true,
        wrapAround: true
    });

    // enable restart button to reverse carousel to the first slide
    var restartButtom = document.querySelector('.btn--restart');
    restartButtom.addEventListener('click', function(event){
       event.preventDefault();
       console.log('restart clicked');
       flkty.selectCell(0);
    });

    // animate progress bar
    var progressBar = document.querySelector('.carousel__progress-bar');

    flkty.on( 'scroll', function( progress ) {
        progress = Math.max( 0, Math.min( 1, progress ) );
        progressBar.style.width = ( progress * 100 + 'vw' );
    });

    // Initialize and add the map
    window.initMap = function () {
        // The map, centered at first slide location

        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: carouselSlidesData[0].coords});

        // add map markers
        for(var i=0; i < carouselSlidesData.length; i++){
            var coordinates = carouselSlidesData[i].coords;
            var marker = new google.maps.Marker({
                position: coordinates,
                map: map
            });

            // to dynamically set iterator value to the functions, anonymous function must be used
            // otherwise last value of operator is always being set
            // http://bonsaiden.github.io/JavaScript-Garden/#function.closures

            marker.addListener('click', (function(j){
                flkty.selectCell(j);
                console.log(j);
            }).bind(this, i));

            // ALTERNATIVE SYNTAX - DOING THE SAME BUT COMPILIG AND RUNNING FUNCTION SEVERAL TIMES
            // (function(j){
            // marker.addListener('click', function(){
            //     flkty.selectCell(j);
            //     console.log(j);
            // };
            // })(i);

            // OTHER SOLUTION: in for loop use 'let i=0' instead of 'var i=0'
            // this is the most natural way, support for 'let' variable declaration is necessary though
            // marker.addListener('click', function() {
            //     flkty.selectCell(i);
            //     console.log(i);
            // });

        }

        // add action changing active marker for the one referenced by carousel
        flkty.on( 'change', function( index ) {
            var coordinates = carouselSlidesData[index].coords;
            map.panTo(coordinates);
            map.setZoom(7);
        });

    };

})(window);
