const names = require('./names.js');

const hobbies = require('./hobbies.js');


function people() {

    const name = names('Carlo', 'Benedetti')

    return {
        fullName: `${name.firstName} ${name.lastName}`,
        hobbies: hobbies('letteratura','poesia','giardinaggio')
    }
};

console.log(people());


