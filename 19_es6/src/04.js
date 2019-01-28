{
    console.log('ES6');

    // Zadanie pierwsze
    console.log('--- string');
    const string1 = 'Hello';
    const string2 = 'World';
    console.log(`${string1} ${string2}!`);

    // Zadanie drugie
    console.log('--- multiply');
    const multiply = (x, y = 1) => {
        return x * y;
    };

    console.log(multiply(5, 2));
    console.log(multiply(5));

    // Zadanie trzecie
    console.log('--- average');

    const average = (...args) => {
        let result = 0;
        args.forEach(arg => result += arg);
        return result/args.length;
    };

    console.log(average(1));
    console.log(average(1,3));
    console.log(average(1,3,6,6));

    // Zadanie czwarte
    console.log('--- grades');

    const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
    console.log(average(...grades));

    // Zadanie piąte
    console.log('Destrukturyzacja');

    const [,,firstname,, lastname] = [1, 4, 'Iwona', false, 'Nowak'];
    console.log(`${firstname} ${lastname}`);
}
