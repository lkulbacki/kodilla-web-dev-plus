'use strict';
(function(){
    var elem = document.querySelector('.carousel');

    // initialize flickity carousel
    var flkty = new Flickity( elem, {
        // options
        imagesLoaded: true,
        pageDots: false,
        percentPosition: false,
        hash: true
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
