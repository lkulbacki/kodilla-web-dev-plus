function Column(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No name';
    this.element = generateTemplate('column-template', { name: this.name, id: this.id });

    this.element.querySelector('.column').addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-delete')) {
            self.removeColumn();
        }

        else if (event.target.classList.contains('btn-edit')) {
            self.editColumn();
        }

        else if (event.target.classList.contains('add-card')) {
            event.preventDefault();
            var cardName = prompt("Enter the name of the card");
            var data = new FormData();
            data.append('name', cardName);
            data.append('bootcamp_kanban_column_id', self.id);
            fetch(prefix + baseUrl + '/card', {
                method: 'POST',
                headers: myHeaders,
                body: data,
            })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                var card = new Card(resp.id, cardName);
                self.addCard(card);
            });
        }
    });
}

Column.prototype = {
    addCard: function(card) {
        this.element.querySelector('ul').appendChild(card.element);
    },

    removeColumn: function() {
        var self = this;
        fetch(prefix + baseUrl + '/column/' + self.id, { method: 'DELETE', headers: myHeaders })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                self.element.parentNode.removeChild(self.element);
            });
    },
    editColumn: function () {
        var self = this;
        var newColumnName = prompt('New column name');
        var data = new FormData();
        data.append('name', newColumnName);
        console.log('New name: ' + newColumnName);
        fetch(prefix + baseUrl + '/column/' + self.id, { method: 'PUT', headers: myHeaders, body: data })
            .then(function(resp) {
                return resp.json();
            })
            .then(function(resp) {
                console.log('Column name update: success!!');
            });
    }
};
