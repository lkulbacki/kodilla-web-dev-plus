'use strict';
(function(window){
    window.modals = {};

    // SHOW MODAL
    // as event consequence
    window.modals.showModal = function(event){
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.add('show');
        var targetModal = document.querySelector(this.querySelector('a').getAttribute('href'));
        targetModal.classList.add('show');
    };

    // by passing modal ID
    window.modals.showModalById = function(modalId){
        document.querySelector('#modal-overlay').classList.add('show');
        var targetModal = document.querySelector(modalId);
        targetModal.classList.add('show');
    };


    // CLOSE MODAL
    // as event consequence
    window.modals.hideModal = function(event){
        event.preventDefault();
        document.querySelector('#modal-overlay').classList.remove('show');
    };

    // by passing modal ID
    window.modals.closeModalById = function(modalId){
        document.querySelector('#modal-overlay').classList.remove('show');
        var targetModal = document.querySelector(modalId);
        targetModal.classList.remove('show');
    };

    // add close modal functions (event version) to proper modal elements in HTML
    // button click
    var closeButtons = document.querySelectorAll('.modal .close');

    for(var i = 0; i < closeButtons.length; i++){
        closeButtons[i].addEventListener('click', window.modals.hideModal);
    }
    // overlay click
    document.querySelector('#modal-overlay').addEventListener('click', window.modals.hideModal);

    // propagation control - to avoid modal closing when clickicn on it's body
    var modals = document.querySelectorAll('.modal');

    for(var i = 0; i < modals.length; i++){
        modals[i].addEventListener('click', function(event){
            event.stopPropagation();
        });
    }

})(window); // IIFY end
