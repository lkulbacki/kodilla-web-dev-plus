(function(){
    var data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];


    for(var index in data){
        // initiate box structure and add ID
        var boxDefinitionPart01 = '<div id="' + data[index]['id'] + '" class="box ';

        // add box classes
        var boxDefinitionPart02 = '';
        for (i=0; i < data[index]['categories'].length; i++){
            boxDefinitionPart02 = boxDefinitionPart02 + data[index]['categories'][i] + ' ';
        }
        // add box header and content
        var boxDefinitionPart03 = '"><header>' + data[index]['title'] + '</header>' +
            '<div>' + data[index]['content'] + '</div></div>';

        // inspect
        console.log(boxDefinitionPart01);
        console.log(boxDefinitionPart02);
        console.log(boxDefinitionPart03);

        // write element to DOM
        document.write(boxDefinitionPart01 + boxDefinitionPart02 + boxDefinitionPart03);

    };

    console.log('end');

})();

