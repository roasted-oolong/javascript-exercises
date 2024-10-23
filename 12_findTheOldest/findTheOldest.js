const findTheOldest = people => {
    return people.sort((firstPerson, secondPerson) => {
        const currentYear = new Date().getFullYear();
        const ageOfFirstPerson = (firstPerson.yearOfDeath || currentYear) - firstPerson.yearOfBirth
        const ageOfSecondPerson = (secondPerson.yearOfDeath || currentYear) - secondPerson.yearOfBirth
        return ageOfFirstPerson > ageOfSecondPerson ? -1 : 1
    })[0];
}

// Do not edit below this line
module.exports = findTheOldest;
