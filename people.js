const names = require('./names.js');

const hobbies = require('./hobbies.js');


function people() {
    return {
        fullName: `${names("Carlo", "Benedetti").firstName} ${names("Carlo", "Benedetti").lastName}`,
        hobbies: hobbies('letteratura','poesia','giardinaggio')
    }
};

console.log(people());


