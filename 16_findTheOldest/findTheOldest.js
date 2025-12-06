const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    let oldestPerson = null; 
    let oldestAge = 0;

    for (let person of people) {
        let deathYear = person.yearOfDeath || currentYear; 

        let age = deathYear - person.yearOfBirth;

        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
