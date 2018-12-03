'use strict';
(function(){
    var url = 'https://restcountries.eu/rest/v2/name/';
    var countriesList = document.getElementById('countries');

    document.getElementById('search').addEventListener('click', searchCountries);

    function searchCountries() {
        var countryName = document.getElementById('country-name').value;
        if(!countryName.length) countryName = 'Poland';
        fetch(url + countryName)
            .then(function(resp) {
                return resp.json();
            })
            .then(showCountriesList);

    }

    function showCountriesList(resp){
        countriesList.innerHTML = '';
        resp.forEach(function(item){
            var liEl = document.createElement('li');
            liEl.innerHTML = "<p><strong>" + item.name + "</strong></p><p>Capital: <strong>" + item.capital +
            "</strong></p><img src='" + item.flag + "' alt='flag'>";
            countriesList.appendChild(liEl);
        });
    }

    searchCountries();

})();
