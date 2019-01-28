// KLASA KANBAN CARD
function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No desc';
    this.element = generateTemplate('card-template', { description: this.name }, 'li');

    this.element.querySelector('.card').addEventListener('click', function (event) {
        event.stopPropagation();

        if (event.target.classList.contains('btn-delete')) {
            self.removeCard();
        }

        else if (event.target.classList.contains('btn-edit')) {
            self.editCard();
        }

    });

    this.element.querySelector('.card').addEventListener('drop', function(event){
        event.stopPropagation();
        console.log('Dropped card ID: ' + self.id);
        console.log('On column ID: ' + self.element.parentElement.id);
        self.moveCard();
    });

}
Card.prototype = {
    removeCard: function() {
        var self = this;
        fetch(prefix + baseUrl + '/card/' + self.id, { method: 'DELETE', headers: myHeaders })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                self.element.parentNode.removeChild(self.element);
            });
    },
    moveCard: function() {
        var self = this;
        var data = new FormData();
        console.log('Moving to column: ' + self.element.parentElement.id);
        data.append('bootcamp_kanban_column_id', parseInt(self.element.parentElement.id));
        fetch(prefix + baseUrl + '/card/' + self.id, { method: 'PUT', headers: myHeaders, body: data })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                console.log('Parent column update: success!!');
            });
    },
    editCard: function () {
        var self = this;
        var newCardName = prompt('New card name');
        var data = new FormData();
        data.append('name', newCardName);
        console.log('New name: ' + newCardName);
        fetch(prefix + baseUrl + '/card/' + self.id, { method: 'PUT', headers: myHeaders, body: data })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                console.log('Parent column update: success!!');
            });
    }

};
