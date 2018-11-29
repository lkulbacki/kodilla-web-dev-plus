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


})();
