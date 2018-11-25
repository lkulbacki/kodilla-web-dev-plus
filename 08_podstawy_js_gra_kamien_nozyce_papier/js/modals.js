'use strict';
(function(){
    // open modal
    var showModal = function(event){
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var targetModal = document.querySelector(this.getAttribute('href'));
        targetModal.classList.add('show');

        setTimeout(function (){
            targetModal.querySelector('header').innerHTML = 'zmieniony!';
        }, 2000);

    };

    var testScope = "xxx Scope Global?";

    // SHOW MODAL
    //
    // var modalLinks = document.querySelectorAll('.show-modal');
    //
    // for(var i = 0; i < modalLinks.length; i++){
    //     modalLinks[i].addEventListener('click', showModal);
    // }

    // CLOSE MODAL

    var hideModal = function(event){
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    // using button
    var closeButtons = document.querySelectorAll('.modal .close');

    for(var i = 0; i < closeButtons.length; i++){
        closeButtons[i].addEventListener('click', hideModal);
    }

    // using overlay click

    document.querySelector('#modal-overlay').addEventListener('click', hideModal);

    // propagation control

    var modals = document.querySelectorAll('.modal');

    for(var i = 0; i < modals.length; i++){
        modals[i].addEventListener('click', function(event){
            event.stopPropagation();
        });
    }

})();