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


})();
