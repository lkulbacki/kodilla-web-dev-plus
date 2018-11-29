'use strict';
(function(window){
    window.modals = Object;
    // open modal
    // MOVED TO SCRIPT.JS
    // var showModal = function(event){
    //     event.preventDefault();
    //     console.log("showModal");
    //     document.querySelector('#modal-overlay').classList.add('show');
    //     var targetModal = document.querySelector(this.getAttribute('href'));
    //     targetModal.classList.add('show');
    // };

    // var testScope = "xxx Scope Global?";

    // SHOW NEW GAME MODAL

    // var modalLinks = document.querySelectorAll('#modal-newgame');
    //
    // for(var i = 0; i < modalLinks.length; i++){
    //     modalLinks[i].addEventListener('click', showModal);
    // }

    // CLOSE MODAL

    window.modals.hideModal = function(event){
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    // using button
    var closeButtons = document.querySelectorAll('.modal .close');

    for(var i = 0; i < closeButtons.length; i++){
        closeButtons[i].addEventListener('click', window.modals.hideModal);
    }

    // using overlay click

    document.querySelector('#modal-overlay').addEventListener('click', window.modals.hideModal);

    // propagation control

    var modals = document.querySelectorAll('.modal');

    for(var i = 0; i < modals.length; i++){
        modals[i].addEventListener('click', function(event){
            event.stopPropagation();
        });
    }

    window.modals.showModalById = function(modalId){
        document.querySelector('#modal-overlay').classList.add('show');
        var targetModal = document.querySelector(modalId);
        targetModal.classList.add('show');
    };

    window.modals.closeModalById = function(modalId){
        document.querySelector('#modal-overlay').classList.remove('show');
        var targetModal = document.querySelector(modalId);
        targetModal.classList.remove('show');
    };

    window.modals.showModal = function(event){
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var targetModal = document.querySelector(this.querySelector('a').getAttribute('href'));
        targetModal.classList.add('show');
    };

})(window); // IIFY
