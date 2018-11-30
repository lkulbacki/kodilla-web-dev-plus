'use strict';
(function(){
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

})();
