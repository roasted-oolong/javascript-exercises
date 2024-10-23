const getAge = people.sort((firstPerson, secondPerson) => {
    if(!YearOfDeath) {
        deathYear = new Date().getFullYear();
    }
    const ageOfFirstPerson = firstPerson.YearOfDeath || deathYear - firstPerson.YearOfBirth
    const ageOfSecondPerson = secondPerson.YearOfDeath || deathYear - secondPerson.YearOfBirth
    return ageOfFirstPerson > ageOfSecondPerson ? 1 : -1;
})[0];

// Do not edit below this line
module.exports = findTheOldest;
